// Every user-facing string on the landing page, as [English, Hebrew, French].
// Values may contain inline HTML (<strong>, <em>, the BOT tag). Terms follow
// the player app (apps/player/src/i18n in fb4business/Betsfans-poker) so the
// landing page and the game use the same words.

const BOT = '<span class="bot-tag">BOT</span>';

export const LANGS = {
  en: { dir: "ltr", locale: "en_US", path: "/", label: "English", short: "EN", flag: "🇬🇧" },
  he: { dir: "rtl", locale: "he_IL", path: "/he", label: "עברית", short: "עב", flag: "🇮🇱" },
  fr: { dir: "ltr", locale: "fr_FR", path: "/fr", label: "Français", short: "FR", flag: "🇫🇷" },
};

export const strings = {
  // ---------- <head> ----------
  metaTitle: [
    "Free Social Poker Online — Texas Hold'em with Friends | BetsFans Poker",
    "פוקר חברתי חינם אונליין — טקסס הולדם עם חברים | BetsFans Poker",
    "Poker social gratuit en ligne — Texas Hold'em entre amis | BetsFans Poker",
  ],
  metaDescription: [
    "Play free social poker online: Texas Hold'em and Omaha with friends, private VIP tables and AI bots always marked BOT. 10,000 free chips to start. Virtual chips only. 18+.",
    "שחקו פוקר חברתי בחינם אונליין: טקסס הולדם ואומהה עם חברים, שולחנות VIP פרטיים ובוטים של AI שתמיד מסומנים BOT. 10,000 צ'יפים חינם להתחלה. צ'יפים וירטואליים בלבד. 18+.",
    "Jouez au poker social gratuit en ligne : Texas Hold'em et Omaha entre amis, tables privées VIP et bots IA toujours signalés BOT. 10 000 jetons offerts pour commencer. Jetons virtuels uniquement. 18+.",
  ],
  metaKeywords: [
    "free poker, social poker, free online poker, texas holdem online free, play poker with friends, private poker table, VIP poker tables, poker with AI bots, free poker chips, omaha poker online, poker game browser, space poker, BetsFans Poker, The Final Frontier",
    "פוקר חינם, פוקר חברתי, פוקר אונליין חינם, טקסס הולדם חינם, פוקר עם חברים, שולחן פוקר פרטי, שולחנות VIP, פוקר נגד בוטים, צ'יפים חינם, אומהה אונליין, משחק פוקר בדפדפן, BetsFans Poker, הגבול האחרון",
    "poker gratuit, poker social, poker en ligne gratuit, texas holdem gratuit, jouer au poker entre amis, table de poker privée, tables VIP, poker contre des bots IA, jetons de poker gratuits, omaha en ligne, poker dans le navigateur, poker spatial, BetsFans Poker, The Final Frontier",
  ],
  ogTitle: [
    "BetsFans Poker — The Final Frontier of Social Poker",
    "BetsFans Poker — הגבול האחרון של הפוקר החברתי",
    "BetsFans Poker — The Final Frontier du poker social",
  ],
  ogDescription: [
    "Free Texas Hold'em and Omaha among the stars. Private VIP tables, friends, and AI bots marked BOT. 10,000 free chips to start — virtual chips only.",
    "טקסס הולדם ואומהה בחינם בין הכוכבים. שולחנות VIP פרטיים, חברים ובוטים של AI המסומנים BOT. 10,000 צ'יפים חינם להתחלה — צ'יפים וירטואליים בלבד.",
    "Texas Hold'em et Omaha gratuits parmi les étoiles. Tables privées VIP, amis et bots IA signalés BOT. 10 000 jetons offerts pour commencer — jetons virtuels uniquement.",
  ],
  ogImageAlt: [
    "BetsFans Poker — gold-trimmed poker tables in a space saloon, with the AI bot crew",
    "BetsFans Poker — שולחנות פוקר מעוטרי זהב בסלון חללי, עם צוות הבוטים",
    "BetsFans Poker — tables de poker dorées dans un saloon spatial, avec l'équipe de bots IA",
  ],

  // ---------- Header ----------
  skip: ["Skip to content", "דלגו לתוכן", "Aller au contenu"],
  homeAria: ["BetsFans Poker — home", "BetsFans Poker — דף הבית", "BetsFans Poker — accueil"],
  navAria: ["Main", "ראשי", "Principal"],
  navFrontier: ["The Final Frontier", "הגבול האחרון", "The Final Frontier"],
  navJoin: ["How to join", "איך מצטרפים", "Comment jouer"],
  navVip: ["Private &amp; VIP", "פרטי ו־VIP", "Privé &amp; VIP"],
  navFriends: ["Friends &amp; bots", "חברים ובוטים", "Amis &amp; bots"],
  navFaq: ["FAQ", "שאלות נפוצות", "FAQ"],
  langAria: ["Language", "שפה", "Langue"],
  login: ["Log in", "התחברות", "Connexion"],
  register: ["Register", "הרשמה", "Inscription"],

  // ---------- Hero ----------
  heroEyebrow: ["Social poker · A new orbit", "פוקר חברתי · מסלול חדש", "Poker social · Nouvelle orbite"],
  heroH1a: ["Free social poker,", "פוקר חברתי בחינם,", "Le poker social gratuit,"],
  heroH1b: ["beyond the final frontier.", "מעבר לגבול האחרון.", "au-delà de l'ultime frontière."],
  heroLead: [
    `Texas Hold'em and Omaha at gold-trimmed tables among the stars. Play with friends, take a seat at private VIP tables, and outplay an AI bot crew — every one marked ${BOT}.`,
    `טקסס הולדם ואומהה בשולחנות מעוטרי זהב בין הכוכבים. שחקו עם חברים, תפסו מקום בשולחנות VIP פרטיים ונצחו את צוות בוטי ה־AI — כל אחד מהם מסומן ${BOT}.`,
    `Texas Hold'em et Omaha sur des tables dorées, parmi les étoiles. Jouez entre amis, prenez place aux tables privées VIP et déjouez notre équipe de bots IA — chacun signalé ${BOT}.`,
  ],
  heroPlay: ["Play now — free", "שחקו עכשיו — בחינם", "Jouer maintenant — gratuit"],
  inviteFriends: ["Invite friends", "הזמינו חברים", "Inviter des amis"],
  heroMicro: [
    '<strong class="gold">10,000 free chips</strong> to start · No download · Virtual chips only · 18+',
    '<strong class="gold">10,000 צ\'יפים חינם</strong> להתחלה · בלי הורדה · צ\'יפים וירטואליים בלבד · 18+',
    '<strong class="gold">10 000 jetons offerts</strong> pour commencer · Sans téléchargement · Jetons virtuels uniquement · 18+',
  ],
  storesAria: ["Mobile apps", "אפליקציות לנייד", "Applications mobiles"],
  soonOnApple: ["Coming soon on the", "בקרוב ב־", "Bientôt sur l'"],
  soonOnGoogle: ["Coming soon on", "בקרוב ב־", "Bientôt sur"],
  soonBadge: ["Soon", "בקרוב", "Bientôt"],
  scrollCue: ["Scroll to launch", "גללו להמראה", "Faites défiler pour décoller"],

  // ---------- Strip ----------
  stripAria: ["Highlights", "עיקרי הדברים", "Points forts"],
  strip1: ["10,000 free chips", "10,000 צ'יפים חינם", "10 000 jetons offerts"],
  strip2: ["Texas Hold'em", "טקסס הולדם", "Texas Hold'em"],
  strip3: ["Pot-Limit Omaha", "אומהה פוט־לימיט", "Omaha Pot-Limit"],
  strip4: ["Heads-up", "ראש בראש", "Heads-up"],
  strip5: ["VIP private tables", "שולחנות VIP פרטיים", "Tables privées VIP"],
  strip6: ["AI bots always marked BOT", "בוטים של AI תמיד מסומנים BOT", "Bots IA toujours signalés BOT"],
  strip7: ["Friends, clubs &amp; leaderboards", "חברים, מועדונים וטבלאות דירוג", "Amis, clubs &amp; classements"],
  strip8: ["Provably fair deal", "חלוקה הוגנת וניתנת לאימות", "Distribution équitable vérifiable"],

  // ---------- The Final Frontier ----------
  frontierName: ["The Final Frontier", "הגבול האחרון", "The Final Frontier"],
  mapAlt: [
    "The Final Frontier galaxy map: Rustbelt Station, Neon Orbit, Asteroid Frontier, Deep Space and The Core",
    "מפת הגלקסיה של הגבול האחרון: תחנת ראסטבלט, מסלול הניאון, גבול האסטרואידים, החלל העמוק והליבה",
    "Carte galactique de The Final Frontier : Station Rustbelt, Orbite Néon, Frontière des Astéroïdes, Espace Profond et Le Noyau",
  ],
  st1: ["Rustbelt Station", "תחנת ראסטבלט", "Station Rustbelt"],
  st2: ["Neon Orbit", "מסלול הניאון", "Orbite Néon"],
  st3: ["Asteroid Frontier", "גבול האסטרואידים", "Frontière des Astéroïdes"],
  st4: ["Deep Space", "החלל העמוק", "Espace Profond"],
  st5: ["The Core", "הליבה", "Le Noyau"],
  sal1: ["The Rusty Circuit Saloon", "סלון המעגל החלוד", "Le Saloon du Circuit Rouillé"],
  sal2: ["The Starlight Saloon", "סלון אור הכוכבים", "Le Saloon des Étoiles"],
  sal3: ["The Outlaw Outpost", "מוצב פורעי החוק", "Le Repaire des Hors-la-loi"],
  sal4: ["The Violet Void", "הריק הסגול", "Le Vide Violet"],
  sal5: ["The Crown of Stars", "כתר הכוכבים", "La Couronne des Étoiles"],
  desc1: [
    "Warm lights, worn copper, and a seat for every newcomer. Start your journey at the frontier's smallest buy-ins.",
    "אורות חמים, נחושת שחוקה ומקום לכל מצטרף. התחילו במסלול עם דמי הכניסה הנמוכים ביותר.",
    "Lumières chaudes, cuivre patiné et une place pour chaque nouvel arrivant. Commencez aux plus petits buy-ins.",
  ],
  desc2: [
    "A neon trading hub with new tables and bigger buy-ins waiting beyond the airlock.",
    "מרכז מסחר זוהר עם שולחנות חדשים ודמי כניסה גבוהים יותר מעבר למנעל האוויר.",
    "Un comptoir lumineux, de nouvelles tables et des buy-ins plus élevés derrière le sas.",
  ],
  desc3: [
    "A rugged outpost in the asteroid belt. Bring your chips and your nerve.",
    "מוצב מחוספס בחגורת האסטרואידים. הביאו את הצ'יפים ואת האומץ.",
    "Un avant-poste au cœur des astéroïdes. Apportez vos jetons et votre audace.",
  ],
  desc4: [
    "Beyond the familiar stars, the next rung of the buy-in ladder awaits.",
    "מעבר לכוכבים המוכרים מחכה השלב הבא בסולם דמי הכניסה.",
    "Au-delà des étoiles familières, le prochain palier de buy-in vous attend.",
  ],
  desc5: [
    "The galaxy's grand arena. Earn your passage to the highest buy-ins.",
    "הזירה הגדולה של הגלקסיה. הרוויחו את הדרך לדמי הכניסה הגבוהים ביותר.",
    "La grande arène galactique. Gagnez votre passage vers les plus hauts buy-ins.",
  ],
  kicker1: ["Sector 01 · Starts unlocked", "גזרה 01 · פתוחה מההתחלה", "Secteur 01 · Débloqué dès le départ"],
  kicker2: ["Sector 02 · 100 XP", "גזרה 02 · 100 XP", "Secteur 02 · 100 XP"],
  kicker3: ["Sector 03 · 300 XP", "גזרה 03 · 300 XP", "Secteur 03 · 300 XP"],
  kicker4: ["Sector 04 · 700 XP", "גזרה 04 · 700 XP", "Secteur 04 · 700 XP"],
  kicker5: ["Sector 05 · 1,400 XP", "גזרה 05 · 1,400 XP", "Secteur 05 · 1 400 XP"],
  voyEyebrow: ["Our poker world", "עולם הפוקר שלנו", "Notre univers poker"],
  voyTitle: [
    "The Final Frontier <em>— a poker adventure in space.</em>",
    "הגבול האחרון <em>— הרפתקת פוקר בחלל.</em>",
    "The Final Frontier <em>— une aventure poker dans l'espace.</em>",
  ],
  srTitle: ["Five destinations in The Final Frontier", "חמישה יעדים בגבול האחרון", "Cinq destinations dans The Final Frontier"],
  unlocked: ["Starts unlocked", "פתוחה מההתחלה", "Débloqué dès le départ"],
  xpToUnlock: ["{n} XP to unlock", "{n} XP לפתיחה", "{n} XP pour débloquer"],
  fcEyebrow: ["Earn your passage", "הרוויחו את המסע", "Gagnez votre passage"],
  fcTitle: ["Every hand moves you <em>closer to the Core.</em>", "כל יד מקרבת אתכם <em>אל הליבה.</em>", "Chaque main vous rapproche <em>du Noyau.</em>"],
  fcLead: [
    "Earn <strong>10 XP</strong> for every hand you complete and <strong>+15 XP</strong> when you take the pot. Unlock new space saloons, collect milestone badges, and sit at real tables against real players and the bot crew — the same live game, in a whole new universe.",
    "קבלו <strong>10 XP</strong> על כל יד שהסתיימה ועוד <strong>15 XP</strong> כשאתם לוקחים את הקופה. פתחו סלונים חדשים בחלל, אספו תגי הישג ושבו בשולחנות אמיתיים מול שחקנים אמיתיים וצוות הבוטים — אותו משחק חי, ביקום חדש לגמרי.",
    "Gagnez <strong>10 XP</strong> par main terminée et <strong>+15 XP</strong> quand vous remportez le pot. Débloquez de nouveaux saloons spatiaux, collectionnez des badges et asseyez-vous à de vraies tables face à de vrais joueurs et à nos bots — le même jeu en direct, dans un tout nouvel univers.",
  ],
  fcT1: ["5 destinations, from Rustbelt Station to The Core", "5 יעדים, מתחנת ראסטבלט ועד הליבה", "5 destinations, de la Station Rustbelt au Noyau"],
  fcT2: ["Real tables inside illustrated space saloons", "שולחנות אמיתיים בתוך סלונים מאוירים בחלל", "De vraies tables dans des saloons spatiaux illustrés"],
  fcT3: ["Progress saved to your account", "ההתקדמות נשמרת בחשבון שלכם", "Progression enregistrée sur votre compte"],
  fcBtn: ["Launch The Final Frontier", "צאו לגבול האחרון", "Lancer The Final Frontier"],
  fcAlt: [
    "The Final Frontier galaxy map in BetsFans Poker — choose your station and enter the saloon",
    "מפת הגלקסיה של הגבול האחרון ב־BetsFans Poker — בחרו תחנה והיכנסו לסלון",
    "La carte galactique de The Final Frontier dans BetsFans Poker — choisissez votre station et entrez dans le saloon",
  ],
  fcCap: ["Galaxy map — chart your path to the Core", "מפת הגלקסיה — שרטטו את הדרך אל הליבה", "Carte galactique — tracez votre route vers le Noyau"],

  // ---------- How to join ----------
  joinEyebrow: ["How it works", "איך זה עובד", "Comment ça marche"],
  joinTitle: ["From the lobby to your seat <em>in under a minute.</em>", "מהלובי אל הכיסא <em>בפחות מדקה.</em>", "Du lobby à votre siège <em>en moins d'une minute.</em>"],
  j1t: ["Tap Play now", "הקישו על „שחקו עכשיו”", "Appuyez sur Jouer"],
  j1p: [
    'No download, no form. BetsFans Poker opens right in your browser on phone or desktop, and you start with <strong class="gold">10,000 free chips</strong>.',
    'בלי הורדה ובלי טופס. BetsFans Poker נפתח ישר בדפדפן בטלפון או במחשב, ואתם מתחילים עם <strong class="gold">10,000 צ\'יפים חינם</strong>.',
    'Sans téléchargement ni formulaire. BetsFans Poker s\'ouvre directement dans votre navigateur, sur mobile ou ordinateur, et vous commencez avec <strong class="gold">10 000 jetons offerts</strong>.',
  ],
  j1a: [
    "BetsFans Poker lobby on a phone — AI Poker Lobby with Hold'em and Omaha tables",
    "הלובי של BetsFans Poker בטלפון — לובי פוקר AI עם שולחנות הולדם ואומהה",
    "Le lobby BetsFans Poker sur mobile — Lobby Poker IA avec des tables Hold'em et Omaha",
  ],
  j2t: ["Pick your table", "בחרו שולחן", "Choisissez votre table"],
  j2p: [
    "Filter the lobby by <strong>Hold'em</strong>, <strong>Omaha</strong>, <strong>Heads-up</strong> or <strong>VIP</strong>. See the blinds, buy-in and who's seated — players and bots, side by side.",
    "סננו את הלובי לפי <strong>הולדם</strong>, <strong>אומהה</strong>, <strong>ראש בראש</strong> או <strong>VIP</strong>. ראו את הבליינדים, דמי הכניסה ומי יושב — שחקנים ובוטים, זה לצד זה.",
    "Filtrez le lobby par <strong>Hold'em</strong>, <strong>Omaha</strong>, <strong>Heads-up</strong> ou <strong>VIP</strong>. Voyez les blindes, le buy-in et qui est assis — joueurs et bots, côte à côte.",
  ],
  j2a: [
    "Poker lobby with blinds, game type, players and buy-in for every table",
    "לובי הפוקר עם בליינדים, סוג משחק, שחקנים ודמי כניסה לכל שולחן",
    "Lobby de poker avec blindes, type de jeu, joueurs et buy-in pour chaque table",
  ],
  j3t: ["Watch a hand live", "צפו ביד בשידור חי", "Regardez une main en direct"],
  j3p: [
    "Tap the {eye} eye to watch the table before you sit — no account needed to watch. Read the bots, feel the pace.",
    "הקישו על ה־{eye} עין כדי לצפות בשולחן לפני שאתם מתיישבים — לא צריך חשבון כדי לצפות. קראו את הבוטים והרגישו את הקצב.",
    "Touchez l'œil {eye} pour observer la table avant de vous asseoir — aucun compte nécessaire pour regarder. Lisez les bots, sentez le rythme.",
  ],
  j3a: [
    "Watching a live Pot-Limit Omaha table with AI bots marked BOT",
    "צפייה חיה בשולחן אומהה פוט־לימיט עם בוטים של AI המסומנים BOT",
    "Observation en direct d'une table d'Omaha Pot-Limit avec des bots IA signalés BOT",
  ],
  j4t: ["Take your seat &amp; play", "תפסו מקום ושחקו", "Prenez place &amp; jouez"],
  j4p: [
    "Tap <strong>Join table</strong>, confirm your buy-in and you're dealt in. Every deal is sealed with a fairness commitment you can verify after the hand.",
    "הקישו על <strong>הצטרפו לשולחן</strong>, אשרו את דמי הכניסה ואתם במשחק. כל חלוקה נחתמת בהתחייבות להגינות שאפשר לאמת בסוף היד.",
    "Touchez <strong>Rejoindre la table</strong>, confirmez votre buy-in et vous êtes servi. Chaque distribution est scellée par un engagement d'équité vérifiable après la main.",
  ],
  j4a: [
    "No-Limit Texas Hold'em table with community cards and the pot",
    "שולחן טקסס הולדם נו־לימיט עם הקלפים הפתוחים והקופה",
    "Table de Texas Hold'em No-Limit avec les cartes communes et le pot",
  ],
  j4btn: ["Find a table", "מצאו שולחן", "Trouver une table"],

  // ---------- Gallery ----------
  galEyebrow: ["Live tables", "שולחנות חיים", "Tables en direct"],
  galTitle: ["Gold-trimmed tables. <em>Real hands, live.</em>", "שולחנות מעוטרי זהב. <em>ידיים אמיתיות, בשידור חי.</em>", "Des tables dorées. <em>De vraies mains, en direct.</em>"],
  g1a: ["No-Limit Texas Hold'em online table, blinds 1,000/2,000", "שולחן טקסס הולדם נו־לימיט אונליין, בליינדים 1,000/2,000", "Table de Texas Hold'em No-Limit en ligne, blindes 1 000/2 000"],
  g1t: ["No-Limit Hold'em", "הולדם נו־לימיט", "Hold'em No-Limit"],
  g1s: ["The classic. 2, 6 or 9 seats.", "הקלאסיקה. 2, 6 או 9 מושבים.", "Le classique. 2, 6 ou 9 sièges."],
  g2a: ["Pot-Limit Texas Hold'em table with players and AI bots", "שולחן טקסס הולדם פוט־לימיט עם שחקנים ובוטים של AI", "Table de Texas Hold'em Pot-Limit avec joueurs et bots IA"],
  g2t: ["Pot-Limit Hold'em", "הולדם פוט־לימיט", "Hold'em Pot-Limit"],
  g2s: ["Controlled bets, big decisions.", "הימורים מבוקרים, החלטות גדולות.", "Des mises maîtrisées, de grandes décisions."],
  g3a: ["Pot-Limit Omaha poker table, four hole cards each", "שולחן אומהה פוט־לימיט, ארבעה קלפים לכל שחקן", "Table d'Omaha Pot-Limit, quatre cartes privatives chacun"],
  g3t: ["Pot-Limit Omaha", "אומהה פוט־לימיט", "Omaha Pot-Limit"],
  g3s: ["Four hole cards. Twice the action.", "ארבעה קלפים ביד. כפול אקשן.", "Quatre cartes en main. Deux fois plus d'action."],
  g4a: ["The Rusty Circuit Saloon — a space saloon poker room at Rustbelt Station", "סלון המעגל החלוד — חדר פוקר בסלון חללי בתחנת ראסטבלט", "Le Saloon du Circuit Rouillé — une salle de poker spatiale à la Station Rustbelt"],
  g4t: ["Space saloons", "סלונים בחלל", "Saloons spatiaux"],
  g4s: ["Play the same tables in The Final Frontier.", "שחקו באותם שולחנות בגבול האחרון.", "Jouez aux mêmes tables dans The Final Frontier."],
  g5a: ["VIP private poker tables locked with invitation codes", "שולחנות פוקר VIP פרטיים הנעולים בקוד הזמנה", "Tables de poker privées VIP verrouillées par code d'invitation"],
  g5t: ["VIP private tables", "שולחנות VIP פרטיים", "Tables privées VIP"],
  g5s: ["Invitation code. Invited players only.", "קוד הזמנה. מוזמנים בלבד.", "Code d'invitation. Invités uniquement."],

  // ---------- VIP ----------
  vipEyebrow: ["VIP · Private tables", "VIP · שולחנות פרטיים", "VIP · Tables privées"],
  vipTitle: ["Your table. Your guests. <em>Invitation only.</em>", "השולחן שלכם. האורחים שלכם. <em>בהזמנה בלבד.</em>", "Votre table. Vos invités. <em>Sur invitation uniquement.</em>"],
  vipLead: [
    "Some tables aren't on the open floor. VIP private tables are invitation-only: each one is locked with its own code. Got an invitation? Enter the code once and the table is yours to join.",
    "יש שולחנות שלא פתוחים לכולם. שולחנות VIP פרטיים הם בהזמנה בלבד: כל אחד נעול בקוד משלו. קיבלתם הזמנה? הזינו את הקוד פעם אחת והשולחן פתוח בפניכם.",
    "Certaines tables ne sont pas ouvertes à tous. Les tables privées VIP sont sur invitation : chacune est verrouillée par son propre code. Vous avez une invitation ? Saisissez le code une fois et la table vous est ouverte.",
  ],
  vf1t: ["Private by code", "פרטי עם קוד", "Privée par code"],
  vf1p: ["Only invited players can sit — or even watch.", "רק מוזמנים יכולים לשבת — ואפילו לצפות.", "Seuls les invités peuvent s'asseoir — ou même regarder."],
  vf2t: ["No house bots", "בלי בוטים של הבית", "Aucun bot maison"],
  vf2p: ["VIP tables are people only: you and your friends.", "בשולחנות VIP יושבים רק אנשים: אתם והחברים שלכם.", "Les tables VIP, c'est entre humains : vous et vos amis."],
  vf3t: ["High-roller blinds", "בליינדים של היי־רולרים", "Blindes high-roller"],
  vf3p: ["Big stacks, big blinds, Hold'em or Omaha, 6 or 9 seats.", "ערימות גדולות, בליינדים גדולים, הולדם או אומהה, 6 או 9 מושבים.", "Gros tapis, grosses blindes, Hold'em ou Omaha, 6 ou 9 sièges."],
  vipBtn: ["Unlock my VIP seat", "פתחו את מקום ה־VIP שלי", "Débloquer ma place VIP"],
  vipMail: ["Request a private table", "בקשו שולחן פרטי", "Demander une table privée"],
  vipMailSubject: ["Private table request", "בקשה לשולחן פרטי", "Demande de table privée"],
  vipAlt: [
    "BetsFans Poker VIP private tables list — each table locked with an invitation code",
    "רשימת שולחנות ה־VIP הפרטיים של BetsFans Poker — כל שולחן נעול בקוד הזמנה",
    "Liste des tables privées VIP de BetsFans Poker — chaque table verrouillée par un code d'invitation",
  ],
  vipCap: ["VIP lobby — unlock with your invitation code", "לובי ה־VIP — פתיחה עם קוד ההזמנה שלכם", "Lobby VIP — débloquez avec votre code d'invitation"],

  // ---------- Friends & bots ----------
  frEyebrow: ["Play with friends", "שחקו עם חברים", "Jouez entre amis"],
  frTitle: ["Bring your friends. <em>Meet the bot crew.</em>", "הביאו את החברים. <em>הכירו את צוות הבוטים.</em>", "Venez avec vos amis. <em>Rencontrez nos bots.</em>"],
  frLead: [
    `There's always a game: real people at the table, and AI bots to fill the seats. Every bot has its own style — some are tight, some are wild bluffers — and every one is clearly marked ${BOT}. Never disguised as people.`,
    `תמיד יש משחק: אנשים אמיתיים ליד השולחן, ובוטים של AI שממלאים את המושבים. לכל בוט סגנון משלו — חלקם זהירים, חלקם בלופרים פרועים — וכל אחד מסומן בבירור ${BOT}. אף פעם לא מתחזים לאנשים.`,
    `Il y a toujours une partie : de vraies personnes à table, et des bots IA pour compléter les sièges. Chaque bot a son style — certains serrés, d'autres bluffeurs déchaînés — et chacun est clairement signalé ${BOT}. Jamais déguisés en humains.`,
  ],
  p1t: ["Friends, clubs &amp; leaderboards", "חברים, מועדונים וטבלאות דירוג", "Amis, clubs &amp; classements"],
  p1p: [
    "Add friends, start a club, chat at the table and climb the leaderboard. Replay your hand history and settle who really played it best.",
    "הוסיפו חברים, פתחו מועדון, צ'טו ליד השולחן וטפסו בטבלת הדירוג. הריצו מחדש את היסטוריית הידיים והכריעו מי באמת שיחק הכי טוב.",
    "Ajoutez des amis, créez un club, discutez à table et grimpez au classement. Revoyez l'historique de vos mains et tranchez qui a vraiment le mieux joué.",
  ],
  p1btn: ["Invite on WhatsApp", "הזמינו בוואטסאפ", "Inviter sur WhatsApp"],
  p2a: ["The BetsFans AI poker bot crew — King Bot, Shogun and friends", "צוות בוטי הפוקר של BetsFans — King Bot, ‏Shogun והחברים", "L'équipe de bots IA de BetsFans — King Bot, Shogun et leurs amis"],
  p2t: [`AI bots, always labelled ${BOT}`, `בוטים של AI, תמיד מסומנים ${BOT}`, `Des bots IA, toujours signalés ${BOT}`],
  p2p: [
    "22 characters with their own personas. Practise against them, read their tells, and take their chips.",
    "22 דמויות עם אישיות משלהן. התאמנו נגדן, קראו את הסימנים שלהן וקחו להן את הצ'יפים.",
    "22 personnages avec leur propre personnalité. Entraînez-vous contre eux, repérez leurs tells et raflez leurs jetons.",
  ],
  botsAria: ["Meet the bots", "הכירו את הבוטים", "Rencontrez les bots"],
  botsPrev: ["Previous bots", "הבוטים הקודמים", "Bots précédents"],
  botsNext: ["Next bots", "הבוטים הבאים", "Bots suivants"],
  b1: ["The Calm Predator", "הטורף השקט", "Le prédateur calme"],
  b2: ["The Master Bluffer", "אמן הבלוף", "Le maître du bluff"],
  b3: ["The High Roller", "ההיי־רולר", "Le flambeur"],
  b4: ["The Odds Calculator", "מחשבון הסיכויים", "Le calculateur de cotes"],
  b5: ["The Good Vibes", "האנרגיות הטובות", "Les bonnes ondes"],
  b6: ["The Disciplined One", "הממושמע", "Le discipliné"],
  b7: ["The Stealth Shark", "הכריש החמקן", "Le requin furtif"],
  b8: ["The Chaos Player", "שחקן הכאוס", "Le joueur chaotique"],
  b9: ["The Aggressor", "התוקפן", "L'agresseur"],
  b10: ["The Finisher", "הסוגר", "Le finisseur"],
  b11: ["The Ghost", "רוח הרפאים", "Le fantôme"],
  b12: ["The Positive One", "האופטימי", "L'optimiste"],

  // ---------- Free chips ----------
  chEyebrow: ["Free poker chips", "צ'יפים חינם לפוקר", "Jetons de poker gratuits"],
  chTitle: [
    '{count} free chips <em>to start.</em>',
    '{count} צ\'יפים חינם <em>להתחלה.</em>',
    '{count} jetons offerts <em>pour commencer.</em>',
  ],
  ch1b: ["10,000", "10,000", "10 000"],
  ch1s: ["welcome chips — no form, no phone number", "צ'יפים לפתיחה — בלי טופס ובלי מספר טלפון", "jetons de bienvenue — sans formulaire ni numéro de téléphone"],
  ch2b: ["+5,000", "+5,000", "+5 000"],
  ch2s: ["bonus when you register and verify your phone", "בונוס כשנרשמים ומאמתים את הטלפון", "de bonus en vous inscrivant et en vérifiant votre téléphone"],
  ch3b: ["Daily", "כל יום", "Chaque jour"],
  ch3s: ["free chips and a check-in streak when you run low", "צ'יפים חינם ורצף צ'ק־אין כשנגמרים לכם הצ'יפים", "des jetons gratuits et une série de connexions quand vous êtes à court"],
  chBtn: ["Claim my free chips", "קבלו צ'יפים חינם", "Récupérer mes jetons offerts"],
  chFine: [
    "Chips are virtual and have no cash value. They can never be withdrawn, sold, transferred or exchanged for money or prizes.",
    "הצ'יפים וירטואליים ואין להם ערך כספי. לא ניתן למשוך, למכור, להעביר או להמיר אותם בכסף או בפרסים.",
    "Les jetons sont virtuels et n'ont aucune valeur monétaire. Ils ne peuvent jamais être retirés, vendus, transférés ni échangés contre de l'argent ou des prix.",
  ],

  // ---------- Invite ----------
  invTitle: ["Poker night is better <em>with your crew.</em>", "ערב פוקר טוב יותר <em>עם החבר'ה.</em>", "Une soirée poker, c'est mieux <em>avec sa bande.</em>"],
  invLead: [
    "Send one WhatsApp message and meet your friends at the table — from anywhere on Earth, or beyond.",
    "שלחו הודעת וואטסאפ אחת ופגשו את החברים ליד השולחן — מכל מקום על פני כדור הארץ, ואפילו מעבר לו.",
    "Envoyez un seul message WhatsApp et retrouvez vos amis à table — où que vous soyez sur Terre, ou au-delà.",
  ],
  invShare: ["Share on WhatsApp", "שתפו בוואטסאפ", "Partager sur WhatsApp"],
  invCopy: ["Copy invite link", "העתיקו קישור הזמנה", "Copier le lien d'invitation"],

  // ---------- Apps ----------
  appsEyebrow: ["On your phone", "בטלפון שלכם", "Sur votre téléphone"],
  appsTitle: ["In your pocket <em>— soon in the stores.</em>", "בכיס שלכם <em>— בקרוב בחנויות.</em>", "Dans votre poche <em>— bientôt dans les stores.</em>"],
  appsLead: [
    "BetsFans Poker apps for Android and iPhone are on their way. Until then, the full game runs in your mobile browser — add it to your home screen and play in one tap.",
    "אפליקציות BetsFans Poker לאנדרואיד ולאייפון בדרך. עד אז המשחק המלא רץ בדפדפן בנייד — הוסיפו אותו למסך הבית ושחקו בהקשה אחת.",
    "Les applications BetsFans Poker pour Android et iPhone arrivent. En attendant, le jeu complet tourne dans votre navigateur mobile — ajoutez-le à votre écran d'accueil et jouez en un geste.",
  ],
  appsBtn: ["Play in the browser now", "שחקו עכשיו בדפדפן", "Jouer dans le navigateur"],

  // ---------- FAQ ----------
  faqEyebrow: ["FAQ", "שאלות נפוצות", "FAQ"],
  faqTitle: ["Questions, <em>answered.</em>", "שאלות <em>ותשובות.</em>", "Vos questions, <em>nos réponses.</em>"],
  faq1q: ["Is BetsFans Poker free?", "האם BetsFans Poker בחינם?", "BetsFans Poker est-il gratuit ?"],
  faq1a: [
    "Yes. BetsFans Poker is free to play in your browser. You start with 10,000 free virtual chips, registered players can add a 5,000-chip phone verification bonus, and daily free chips are available when your balance runs low.",
    "כן. משחקים ב־BetsFans Poker בחינם בדפדפן. מתחילים עם 10,000 צ'יפים וירטואליים חינם, שחקנים רשומים יכולים לקבל בונוס של 5,000 צ'יפים על אימות הטלפון, ויש צ'יפים חינם כל יום כשהיתרה נמוכה.",
    "Oui. BetsFans Poker se joue gratuitement dans votre navigateur. Vous commencez avec 10 000 jetons virtuels offerts, les joueurs inscrits peuvent ajouter un bonus de 5 000 jetons en vérifiant leur téléphone, et des jetons gratuits sont disponibles chaque jour quand votre solde est bas.",
  ],
  faq2q: ["Is this real-money gambling?", "האם זה הימור בכסף אמיתי?", "S'agit-il de jeux d'argent ?"],
  faq2a: [
    "No. BetsFans Poker is a social poker game. Chips are virtual, have no cash value and can never be withdrawn, sold, transferred or exchanged for money or prizes. It is for players aged 18 and over.",
    "לא. BetsFans Poker הוא משחק פוקר חברתי. הצ'יפים וירטואליים, אין להם ערך כספי ולא ניתן למשוך, למכור, להעביר או להמיר אותם בכסף או בפרסים. המשחק מיועד לבני 18 ומעלה.",
    "Non. BetsFans Poker est un jeu de poker social. Les jetons sont virtuels, n'ont aucune valeur monétaire et ne peuvent jamais être retirés, vendus, transférés ni échangés contre de l'argent ou des prix. Réservé aux joueurs de 18 ans et plus.",
  ],
  faq3q: ["How do I play poker with friends?", "איך משחקים פוקר עם חברים?", "Comment jouer au poker entre amis ?"],
  faq3a: [
    "Tap the WhatsApp button to invite your friends, then meet at the same table. For a game with invited players only, VIP private tables are locked with their own invitation code and have no house bots — to request one for your group, email support@betsfans-poker.app.",
    "הקישו על כפתור הוואטסאפ כדי להזמין את החברים, ונפגשים באותו שולחן. למשחק עם מוזמנים בלבד יש שולחנות VIP פרטיים הנעולים בקוד הזמנה משלהם ובלי בוטים של הבית — כדי לבקש שולחן לקבוצה שלכם, כתבו ל־support@betsfans-poker.app.",
    "Touchez le bouton WhatsApp pour inviter vos amis, puis retrouvez-vous à la même table. Pour une partie entre invités uniquement, les tables privées VIP sont verrouillées par leur propre code d'invitation et n'ont aucun bot maison — pour en demander une pour votre groupe, écrivez à support@betsfans-poker.app.",
  ],
  faq4q: ["What are private and VIP tables?", "מה הם שולחנות פרטיים ו־VIP?", "Que sont les tables privées et VIP ?"],
  faq4a: [
    "VIP private tables are invitation-only games. Each table has its own code — enter it once and the table is yours to join. Only invited players can sit or watch, and house bots never join.",
    "שולחנות VIP פרטיים הם משחקים בהזמנה בלבד. לכל שולחן קוד משלו — הזינו אותו פעם אחת והשולחן פתוח בפניכם. רק מוזמנים יכולים לשבת או לצפות, ובוטים של הבית אף פעם לא מצטרפים.",
    "Les tables privées VIP sont des parties sur invitation. Chaque table a son propre code — saisissez-le une fois et la table vous est ouverte. Seuls les invités peuvent s'asseoir ou regarder, et les bots maison ne rejoignent jamais.",
  ],
  faq5q: ["Are there bots at the tables?", "יש בוטים בשולחנות?", "Y a-t-il des bots aux tables ?"],
  faq5a: [
    "Public tables include AI house bots so there is always a game. Every bot has its own character and is always clearly marked BOT — bots are never disguised as people.",
    "בשולחנות הציבוריים יש בוטים של AI מטעם הבית, כך שתמיד יש משחק. לכל בוט אופי משלו והוא תמיד מסומן בבירור BOT — בוטים אף פעם לא מתחזים לאנשים.",
    "Les tables publiques accueillent des bots IA maison pour qu'il y ait toujours une partie. Chaque bot a son caractère et est toujours clairement signalé BOT — les bots ne se font jamais passer pour des humains.",
  ],
  faq6q: ["What is The Final Frontier?", "מה זה הגבול האחרון?", "Qu'est-ce que The Final Frontier ?"],
  faq6a: [
    "The Final Frontier is BetsFans Poker's space adventure. Travel from Rustbelt Station to The Core, play real tables in space saloons, earn XP for every hand and unlock new destinations.",
    "הגבול האחרון הוא הרפתקת החלל של BetsFans Poker. טוסו מתחנת ראסטבלט ועד הליבה, שחקו בשולחנות אמיתיים בסלונים בחלל, צברו XP על כל יד ופתחו יעדים חדשים.",
    "The Final Frontier est l'aventure spatiale de BetsFans Poker. Voyagez de la Station Rustbelt jusqu'au Noyau, jouez à de vraies tables dans des saloons spatiaux, gagnez de l'XP à chaque main et débloquez de nouvelles destinations.",
  ],
  faq7q: ["Is there an Android or iPhone app?", "יש אפליקציה לאנדרואיד או לאייפון?", "Existe-t-il une application Android ou iPhone ?"],
  faq7a: [
    "BetsFans Poker apps for Google Play and the Apple App Store are coming soon. Today you can play instantly in any mobile or desktop browser.",
    "אפליקציות BetsFans Poker ל־Google Play ול־App Store של אפל יגיעו בקרוב. כבר היום אפשר לשחק מיד בכל דפדפן בנייד או במחשב.",
    "Les applications BetsFans Poker pour Google Play et l'App Store d'Apple arrivent bientôt. Dès aujourd'hui, vous pouvez jouer instantanément dans n'importe quel navigateur, sur mobile ou ordinateur.",
  ],

  // ---------- Final CTA ----------
  finTitle: ["Your seat among the stars <em>is waiting.</em>", "המקום שלכם בין הכוכבים <em>מחכה.</em>", "Votre place parmi les étoiles <em>vous attend.</em>"],
  finLead: [
    "10,000 free chips. Friends, VIP tables and the bot crew. One tap to deal in.",
    "10,000 צ'יפים חינם. חברים, שולחנות VIP וצוות הבוטים. הקשה אחת ואתם במשחק.",
    "10 000 jetons offerts. Des amis, des tables VIP et nos bots. Un geste pour être servi.",
  ],
  playNow: ["Play now", "שחקו עכשיו", "Jouer maintenant"],
  finReg: ["Create free account", "פתחו חשבון חינם", "Créer un compte gratuit"],
  finAlready: ["Already a player?", "כבר משחקים?", "Déjà joueur ?"],

  // ---------- Footer ----------
  footFine: [
    "BetsFans Poker is a free social poker game for players aged 18+. Chips are virtual, have no cash value and cannot be withdrawn. There is no real-money gambling. Play responsibly and take breaks.",
    "BetsFans Poker הוא משחק פוקר חברתי בחינם לבני 18 ומעלה. הצ'יפים וירטואליים, אין להם ערך כספי ולא ניתן למשוך אותם. אין הימורים בכסף אמיתי. שחקו באחריות ועשו הפסקות.",
    "BetsFans Poker est un jeu de poker social gratuit pour les joueurs de 18 ans et plus. Les jetons sont virtuels, n'ont aucune valeur monétaire et ne peuvent pas être retirés. Aucun jeu d'argent réel. Jouez de façon responsable et faites des pauses.",
  ],
  footPlay: ["Play", "משחק", "Jouer"],
  footLobby: ["Free poker lobby", "לובי פוקר חינם", "Lobby de poker gratuit"],
  footExplore: ["Explore", "גלו", "Explorer"],
  fe1: ["How to join a table", "איך מצטרפים לשולחן", "Comment rejoindre une table"],
  fe2: ["Private &amp; VIP tables", "שולחנות פרטיים ו־VIP", "Tables privées &amp; VIP"],
  fe3: ["Play with friends &amp; AI bots", "שחקו עם חברים ובוטים של AI", "Jouer entre amis &amp; contre des bots IA"],
  fe4: ["Free poker chips", "צ'יפים חינם לפוקר", "Jetons de poker gratuits"],
  footLegal: ["Legal", "משפטי", "Mentions légales"],
  fl1: ["Terms of Service", "תנאי השימוש", "Conditions d'utilisation"],
  fl2: ["Privacy Policy", "מדיניות הפרטיות", "Politique de confidentialité"],
  fl3: ["Delete your data", "מחיקת המידע שלכם", "Supprimer vos données"],
  dockAria: ["Invite friends on WhatsApp", "הזמינו חברים בוואטסאפ", "Inviter des amis sur WhatsApp"],
  dockInvite: ["Invite", "הזמנה", "Inviter"],

  // ---------- Strings main.js reads at runtime ----------
  jsCopied: ["Invite link copied", "קישור ההזמנה הועתק", "Lien d'invitation copié"],
  jsCopyPrompt: ["Copy this link:", "העתיקו את הקישור:", "Copiez ce lien :"],
  waText: [
    "🃏 Join me at BetsFans Poker — free social Texas Hold'em & Omaha among the stars. 10,000 free chips to start (virtual chips, no real money). Pull up a seat:",
    "🃏 בואו לשחק איתי ב־BetsFans Poker — טקסס הולדם ואומהה חברתי בחינם בין הכוכבים. 10,000 צ'יפים חינם להתחלה (צ'יפים וירטואליים, בלי כסף אמיתי). תפסו מקום:",
    "🃏 Rejoins-moi sur BetsFans Poker — Texas Hold'em & Omaha sociaux et gratuits, parmi les étoiles. 10 000 jetons offerts pour commencer (jetons virtuels, sans argent réel). Prends place :",
  ],

  // ---------- Structured data (HowTo) ----------
  howToName: ["How to join a free poker table on BetsFans Poker", "איך מצטרפים לשולחן פוקר חינם ב־BetsFans Poker", "Comment rejoindre une table de poker gratuite sur BetsFans Poker"],
  hs1n: ["Tap Play now", "הקישו על „שחקו עכשיו”", "Appuyez sur Jouer"],
  hs1t: ["Open BetsFans Poker in your browser. No download and no form — you start with 10,000 free virtual chips.", "פתחו את BetsFans Poker בדפדפן. בלי הורדה ובלי טופס — מתחילים עם 10,000 צ'יפים וירטואליים חינם.", "Ouvrez BetsFans Poker dans votre navigateur. Sans téléchargement ni formulaire — vous commencez avec 10 000 jetons virtuels offerts."],
  hs2n: ["Pick a table", "בחרו שולחן", "Choisissez une table"],
  hs2t: ["Filter the lobby by Hold'em, Omaha, Heads-up or VIP and choose your blinds.", "סננו את הלובי לפי הולדם, אומהה, ראש בראש או VIP ובחרו בליינדים.", "Filtrez le lobby par Hold'em, Omaha, Heads-up ou VIP et choisissez vos blindes."],
  hs3n: ["Watch live", "צפו בשידור חי", "Regardez en direct"],
  hs3t: ["Tap the eye icon to watch a hand live before you sit — no account needed to watch.", "הקישו על סמל העין כדי לצפות ביד בשידור חי לפני שמתיישבים — לא צריך חשבון כדי לצפות.", "Touchez l'icône en forme d'œil pour regarder une main en direct avant de vous asseoir — aucun compte nécessaire."],
  hs4n: ["Take your seat", "תפסו מקום", "Prenez place"],
  hs4t: ["Tap Join table, confirm your buy-in and play. Invite friends on WhatsApp to fill the seats.", "הקישו על „הצטרפו לשולחן”, אשרו את דמי הכניסה ושחקו. הזמינו חברים בוואטסאפ כדי למלא את המושבים.", "Touchez Rejoindre la table, confirmez votre buy-in et jouez. Invitez vos amis sur WhatsApp pour remplir les sièges."],
};
