/* BetsFans Poker — landing page behaviour.
   No dependencies. Everything scroll-driven reads one rAF-batched scroll
   position; the page is fully readable without this file. */
(() => {
  "use strict";

  const APP = "https://www.betsfans-poker.app";
  // This page's language and its runtime strings (written by build.mjs).
  const I18N = JSON.parse(document.getElementById("i18n").textContent);
  const LANG = I18N.lang;
  const RTL = document.documentElement.dir === "rtl";
  const NUM_LOCALE = LANG === "fr" ? "fr-FR" : "en-US";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const smooth = (t) => t * t * (3 - 2 * t);

  /* ---------- Language: remember the reader's choice; first visit follows the browser ---------- */
  const PREF = "bfLang";
  const store = {
    get: () => { try { return localStorage.getItem(PREF); } catch { return null; } },
    set: (v) => { try { localStorage.setItem(PREF, v); } catch { /* per-viewer convenience only */ } },
  };
  $$("[data-lang]").forEach((a) => a.addEventListener("click", () => store.set(a.dataset.lang)));
  if (LANG === "en" && !store.get()) {
    const wanted = (navigator.languages || [navigator.language || ""]).map((l) => l.slice(0, 2).toLowerCase()).find((l) => l === "he" || l === "fr" || l === "en");
    if (wanted && wanted !== "en") {
      store.set(wanted);
      location.replace(`/${wanted}${location.search}${location.hash}`);
      return;
    }
  }
  // Close the language menu on an outside tap or Escape.
  const langMenu = $("[data-lang-menu]");
  if (langMenu) {
    document.addEventListener("click", (e) => { if (langMenu.open && !langMenu.contains(e.target)) langMenu.open = false; });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") langMenu.open = false; });
  }

  /* ---------- Outbound links: keep the redirect to /play, add campaign tags ---------- */
  const PATHS = { play: "/play", frontier: "/frontier", login: "/login", register: "/register" };
  $$("[data-app]").forEach((a) => {
    const kind = a.dataset.app;
    const url = new URL(APP + PATHS[kind]);
    if (kind === "login" || kind === "register") url.searchParams.set("redirect", "/play");
    url.searchParams.set("lang", LANG);
    url.searchParams.set("utm_source", "betsfans-poker.com");
    url.searchParams.set("utm_medium", "landing");
    url.searchParams.set("utm_campaign", "final-frontier");
    url.searchParams.set("utm_content", `${kind}-${a.dataset.slot || "page"}`);
    a.href = url.toString();
  });

  /* ---------- WhatsApp invite + copy link ---------- */
  const inviteUrl = (src) => `${I18N.invite}?utm_source=${src}&utm_medium=share&utm_campaign=invite`;
  const inviteText = (src) => `${I18N.waText} ${inviteUrl(src)}`;
  $$("[data-wa]").forEach((a) => {
    a.href = "https://wa.me/?text=" + encodeURIComponent(inviteText("whatsapp"));
  });

  const toast = (msg) => {
    const t = document.createElement("div");
    t.className = "toast";
    t.setAttribute("role", "status");
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2200);
  };
  $$("[data-copy]").forEach((b) =>
    b.addEventListener("click", async () => {
      const url = inviteUrl("copy-link");
      try {
        await navigator.clipboard.writeText(url);
        toast(I18N.copied);
      } catch {
        if (navigator.share) navigator.share({ title: "BetsFans Poker", text: inviteText("share"), url }).catch(() => {});
        else window.prompt(I18N.copyPrompt, url);
      }
    }),
  );

  $$("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));

  /* ---------- Marquees: a second, hidden copy makes the loop seamless ---------- */
  // The loop animates to -50%, so it only starts once the row is doubled; without it
  // (no JavaScript, or reduced motion) each row is a plain horizontal scroller.
  if (!reduced) {
    $$("[data-marquee]").forEach((track) => {
      [...track.children].forEach((li) => {
        const copy = li.cloneNode(true);
        copy.setAttribute("aria-hidden", "true");
        track.appendChild(copy);
      });
      track.classList.add("looping");
      track.parentElement.classList.add("looping");
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
    { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
  );
  $$(".reveal").forEach((el) => io.observe(el));

  /* ---------- Count-up ---------- */
  const counter = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      counter.unobserve(e.target);
      const end = Number(e.target.dataset.count);
      if (reduced) return;
      const t0 = performance.now();
      const tick = (now) => {
        const k = clamp((now - t0) / 1600);
        e.target.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))).toLocaleString(NUM_LOCALE);
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.6 });
  $$("[data-count]").forEach((el) => counter.observe(el));

  /* ---------- Join steps: the sticky frame follows the step in view ---------- */
  const steps = $$(".step");
  const shots = $$("[data-join-img]");
  const stepIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const i = e.target.dataset.step;
      steps.forEach((s) => s.classList.toggle("on", s === e.target));
      shots.forEach((img) => img.classList.toggle("on", img.dataset.joinImg === i));
    });
  }, { rootMargin: "-45% 0px -45% 0px" });
  steps.forEach((s) => stepIO.observe(s));
  steps[0] && steps[0].classList.add("on");

  /* ---------- Starfield (hero) — warps faster while you scroll ---------- */
  const canvas = $("[data-stars]");
  let warp = 0;
  let heroVisible = true;
  if (canvas && !reduced) {
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0, dpr = 1, stars = [];
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = w < 700 ? 140 : 280;
      stars = Array.from({ length: n }, () => ({ x: (Math.random() - 0.5) * w, y: (Math.random() - 0.5) * h, z: Math.random() * w }));
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });
    const draw = () => {
      if (heroVisible) {
        ctx.clearRect(0, 0, w, h);
        const speed = 0.6 + warp * 26;
        const cx = w * 0.62, cy = h * 0.45;
        for (const s of stars) {
          const pz = s.z;
          s.z -= speed;
          if (s.z < 1) { s.x = (Math.random() - 0.5) * w; s.y = (Math.random() - 0.5) * h; s.z = w; continue; }
          const k = 140 / s.z, pk = 140 / pz;
          const x = cx + s.x * k, y = cy + s.y * k;
          const px = cx + s.x * pk, py = cy + s.y * pk;
          const a = clamp(1 - s.z / w) * 0.9;
          ctx.strokeStyle = s.z % 7 < 1 ? `rgba(240,207,114,${a})` : `rgba(255,255,255,${a})`;
          ctx.lineWidth = clamp(1.6 - s.z / w, 0.4, 1.6);
          ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(x + 0.1, y + 0.1); ctx.stroke();
        }
        warp *= 0.92;
      }
      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
  }

  /* ---------- Voyage: route through the five stations ---------- */
  const COORDS = [[15, 74], [35, 49], [57, 39], [75, 23], [91, 15]];
  const STATIONS = I18N.stations.map((st, i) => ({ ...st, x: COORDS[i][0], y: COORDS[i][1] }));
  const MAP_W = 1672, MAP_H = 941;
  const voyage = $("[data-scrub=voyage]");
  const V = {};
  if (voyage) {
    V.stage = $("[data-stage]", voyage);
    V.route = $("[data-route]", voyage);
    V.routeBg = $("[data-route-bg]", voyage);
    V.ship = $("[data-voyage-ship]", voyage);
    V.pin = $(".voyage-pin", voyage);
    V.labels = $$(".stations li", voyage);
    V.card = $(".voyage-card", voyage);
    V.dots = $$(".v-dots li", voyage);
    V.bar = $("[data-v-bar]", voyage);
    V.active = 0;

    // Catmull-Rom through the start point and the stations, as cubic Béziers.
    const pts = [{ x: 40, y: 900 }, ...STATIONS.map((s) => ({ x: (s.x / 100) * MAP_W, y: (s.y / 100) * MAP_H }))];
    const segs = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 };
      const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 };
      segs.push(`C${c1.x.toFixed(1)},${c1.y.toFixed(1)} ${c2.x.toFixed(1)},${c2.y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`);
    }
    const d = `M${pts[0].x},${pts[0].y} ` + segs.join(" ");
    V.route.setAttribute("d", d);
    V.routeBg.setAttribute("d", d);
    V.total = V.route.getTotalLength();
    // Length along the route at which each station is reached.
    const ns = "http://www.w3.org/2000/svg";
    V.cum = [0];
    let acc = "";
    for (let i = 0; i < segs.length; i++) {
      acc += " " + segs[i];
      const tmp = document.createElementNS(ns, "path");
      tmp.setAttribute("d", `M${pts[0].x},${pts[0].y}` + acc);
      V.cum.push(tmp.getTotalLength());
    }
    V.route.style.strokeDasharray = `${V.total} ${V.total}`;
    V.shipScale = 0.6;
  }

  const setStation = (i) => {
    if (i === V.active) return;
    V.active = i;
    const s = STATIONS[i];
    $("[data-v-name]").textContent = s.name;
    $("[data-v-saloon]").textContent = s.saloon;
    $("[data-v-kicker]").textContent = s.kicker;
    $("[data-v-desc]").textContent = s.desc;
    V.card.classList.remove("swap"); void V.card.offsetWidth; V.card.classList.add("swap");
  };

  const layoutVoyage = () => {
    if (!voyage) return;
    const vw = V.pin.clientWidth, vh = V.pin.clientHeight;
    const zoom = vw >= 900 ? 1.15 : 1;
    V.s = Math.max(vw / MAP_W, vh / MAP_H) * zoom;
    V.vw = vw; V.vh = vh;
    V.stage.style.width = MAP_W * V.s + "px";
    V.stage.style.height = MAP_H * V.s + "px";
    V.shipScale = vw < 600 ? 0.55 : vw < 1100 ? 0.7 : 0.8;
  };

  const renderVoyage = (p) => {
    // Travel (1 unit) and dwell (0.6) per station: the ship pauses at each stop.
    const TRAVEL = 1, DWELL = 0.6, n = STATIONS.length;
    let u = clamp(p) * n * (TRAVEL + DWELL);
    let seg = 0, f = 1;
    for (let i = 0; i < n; i++) {
      if (u < TRAVEL) { seg = i; f = smooth(u / TRAVEL); break; }
      u -= TRAVEL;
      if (u < DWELL || i === n - 1) { seg = i; f = 1; break; }
      u -= DWELL;
    }
    const L = V.cum[seg] + (V.cum[seg + 1] - V.cum[seg]) * f;
    const pt = V.route.getPointAtLength(L);
    const a = V.route.getPointAtLength(Math.max(0, L - 2));
    const b = V.route.getPointAtLength(Math.min(V.total, L + 2));
    const ang = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
    V.ship.setAttribute("transform", `translate(${pt.x.toFixed(1)} ${pt.y.toFixed(1)}) rotate(${ang.toFixed(1)}) scale(${V.shipScale})`);
    V.route.style.strokeDashoffset = String(V.total - L);

    // Camera follows the ship, held inside the artwork.
    const sw = MAP_W * V.s, sh = MAP_H * V.s;
    const tx = clamp(V.vw * 0.5 - pt.x * V.s, V.vw - sw, 0);
    const ty = clamp(V.vh * 0.46 - pt.y * V.s, V.vh - sh, 0);
    V.stage.style.transform = `translate3d(${tx.toFixed(1)}px, ${ty.toFixed(1)}px, 0)`;

    const reached = f === 1 ? seg : seg - 1;
    V.labels.forEach((li, i) => li.classList.toggle("on", i <= reached));
    V.dots.forEach((li, i) => li.classList.toggle("on", i <= Math.max(0, reached)));
    setStation(Math.max(0, f === 1 ? seg : seg - 1));
    V.bar.style.width = (clamp(p) * 100).toFixed(1) + "%";
  };

  // Reduced motion: no camera and no flight. The whole map sits still (see main.css) with
  // the route drawn end to end and the ship parked at The Core.
  const renderVoyageStatic = () => {
    const end = V.route.getPointAtLength(V.total);
    const before = V.route.getPointAtLength(V.total - 4);
    const ang = (Math.atan2(end.y - before.y, end.x - before.x) * 180) / Math.PI;
    V.ship.setAttribute("transform", `translate(${end.x.toFixed(1)} ${end.y.toFixed(1)}) rotate(${ang.toFixed(1)}) scale(${V.shipScale})`);
    V.route.style.strokeDashoffset = "0";
    V.labels.forEach((li) => li.classList.add("on"));
  };

  /* ---------- One scroll loop for everything scrubbed ---------- */
  const hero = $("[data-scrub=hero]");
  const heroShip = $(".hero-ship");
  const gallery = $("[data-scrub=gallery]");
  const track = $("[data-track]");
  const header = $(".site-header");
  const dock = $("[data-dock]");
  const finalSec = $(".final");
  const parallax = $$("[data-parallax]");
  let lastY = window.scrollY, ticking = false, introT = reduced ? 1 : 0;

  const progress = (el) => {
    const r = el.getBoundingClientRect();
    const span = r.height - window.innerHeight;
    return span > 0 ? clamp(-r.top / span) : clamp(-r.top / window.innerHeight);
  };

  const bez = (t, a, b, c, d) => {
    const m = 1 - t;
    return m * m * m * a + 3 * m * m * t * b + 3 * m * t * t * c + t * t * t * d;
  };

  const renderHero = () => {
    if (!hero) return;
    const r = hero.getBoundingClientRect();
    // Below 900px the hero is not pinned (see main.css), so measure it as it scrolls away.
    const p = window.innerWidth < 900 ? clamp(-r.top / r.height) : progress(hero);
    hero.style.setProperty("--p", p.toFixed(4));
    heroVisible = r.bottom > 0;
    if (reduced || !heroShip) return;
    // The ship rests low-left, then crosses the hero as you scroll.
    const vw = window.innerWidth, vh = window.innerHeight;
    const t = 0.07 * smooth(introT) + p * 0.93;
    const x = bez(t, -0.2, 0.3, 0.62, 1.25) * vw;
    const y = bez(t, 0.92, 0.98, 0.22, -0.15) * vh;
    const dt = 0.01;
    const x2 = bez(t + dt, -0.2, 0.3, 0.62, 1.25) * vw, y2 = bez(t + dt, 0.92, 0.98, 0.22, -0.15) * vh;
    const ang = (Math.atan2(y2 - y, x2 - x) * 180) / Math.PI;
    const bob = Math.sin(performance.now() / 700) * 6 * (1 - p);
    // Right-to-left pages fly the mirror image: right to left, nose first.
    const sx = RTL ? vw - x - heroShip.clientWidth : x;
    heroShip.style.setProperty("--sx", `${sx.toFixed(1)}px`);
    heroShip.style.setProperty("--sy", `${(y + bob).toFixed(1)}px`);
    heroShip.style.setProperty("--sr", `${(RTL ? -ang : ang).toFixed(1)}deg`);
    heroShip.style.setProperty("--sf", RTL ? "-1" : "1");
    heroShip.style.setProperty("--ss", (0.75 + p * 0.6).toFixed(3));
    heroShip.style.zIndex = p > 0.3 ? 3 : 1;
  };

  const renderGallery = () => {
    if (!gallery || !track || reduced) return;
    const p = progress(gallery);
    const max = Math.max(0, track.scrollWidth - window.innerWidth);
    track.style.transform = `translate3d(${(-max * p).toFixed(1)}px,0,0)`;
  };

  const renderParallax = () => {
    if (reduced) return;
    const vh = window.innerHeight;
    parallax.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      const off = (r.top + r.height / 2 - vh / 2) * Number(el.dataset.parallax);
      el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)`;
    });
  };

  const renderFinal = () => {
    if (!finalSec || reduced) return;
    const r = finalSec.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = clamp((vh - r.top) / (vh + r.height));
    finalSec.style.setProperty("--fx", `${((p * 1.5 - 0.3) * window.innerWidth).toFixed(1)}px`);
  };

  const frame = () => {
    ticking = false;
    const y = window.scrollY;
    warp = Math.min(1, warp + Math.abs(y - lastY) / 900);
    lastY = y;
    header.classList.toggle("scrolled", y > 20);
    dock.classList.toggle("show", y > window.innerHeight * 0.7);
    renderHero();
    if (voyage && !reduced) renderVoyage(progress(voyage));
    renderGallery();
    renderParallax();
    renderFinal();
  };
  const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };

  window.addEventListener("scroll", request, { passive: true });
  window.addEventListener("resize", () => { if (!reduced) layoutVoyage(); request(); }, { passive: true });
  if (voyage && reduced) renderVoyageStatic();
  else layoutVoyage();
  frame();

  // Intro: the ship glides in, then hovers until you scroll.
  if (!reduced && heroShip) {
    const t0 = performance.now();
    const idle = (now) => {
      introT = clamp((now - t0) / 1800);
      if (heroVisible) renderHero();
      requestAnimationFrame(idle);
    };
    requestAnimationFrame(idle);
  }
})();
