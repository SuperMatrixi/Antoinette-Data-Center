/* ANTOINETTE DATA CENTER — chatbot.js v6 — 40 bilingual FAQs */
const TYNA = {
  lang: 'fr',
  greet: {
    fr: "Bonjour ! 👋 Je suis **TYNA**, votre guide de l'Antoinette Data Center 🏠✨ Comment puis-je vous aider ?",
    en: "Hello! 👋 I'm **TYNA**, your Antoinette Data Center guide 🏠✨ How can I help you today?"
  },
  sugg: {
    fr: ["📍 Où êtes-vous ?","🎓 Programmes","🏢 Louer un espace","💰 Tarifs","🤖 IA éthique"],
    en: ["📍 Where are you?","🎓 Programs","🏢 Rent a space","💰 Pricing","🤖 Ethical AI"]
  },
  bad: ['sexe','sex','politic','religion','drogue','drug','violence','arme','weapon','haine','hate','porn'],
  no: {
    fr: "Je suis dédiée à l'Antoinette Data Center uniquement. Comment puis-je vous aider avec nos offres ? 😊",
    en: "I'm dedicated to the Antoinette Data Center only. How can I help with our offers? 😊"
  },
  miss: {
    fr: "Je n'ai pas bien compris. Choisissez parmi les suggestions ci-dessous 👇",
    en: "I didn't quite understand. Please pick from the suggestions below 👇"
  },
  faq: [
    {k:['histoire','history','fondé','founded','qui','who','adc','antoinette','c\'est quoi'],
     fr:"L'ADC a été fondé le **15 novembre 2025** à Paris, Bobigny-Cœur-de-Ville par **Hermann Djoumessi** et **Kristen Girard**. Association loi 1901. 50+ praticiens IA, 12 startups incubées, 150 000 € levés en 2025. 🏛️",
     en:"ADC was founded on **November 15, 2025** in Paris, Bobigny-Cœur-de-Ville by **Hermann Djoumessi** & **Kristen Girard**. Non-profit. 50+ AI practitioners, 12 incubated startups, €150k raised in 2025. 🏛️"},
    {k:['adresse','address','où','where','bobigny','trouver','find','localisation','plan'],
     fr:"📍 **26 Rue du Chemin Vert, Paris, Bobigny-Cœur-de-Ville 93000** — près de la Place Aretha Franklin. Métro Ligne 5 Bobigny-Pablo Picasso.",
     en:"📍 **26 Rue du Chemin Vert, Paris, Bobigny-Cœur-de-Ville 93000** — near Place Aretha Franklin. Metro Line 5 Bobigny-Pablo Picasso."},
    {k:['mission','vision','objectif','goal','but','purpose','valeurs','values'],
     fr:"🎯 Notre mission : promouvoir une **IA éthique**, garantir la **souveraineté des données**, incuber des startups innovantes et créer des espaces créatifs pour tous. Conformes GDPR, AI Act, MiCA, DSA 🇪🇺",
     en:"🎯 Our mission: promoting **ethical AI**, ensuring **data sovereignty**, incubating innovative startups and creating creative spaces for all. GDPR, AI Act, MiCA, DSA compliant 🇪🇺"},
    {k:['guanxi','programme','program','chinois','chinese','mandarin','formation','cours','business chinese'],
     fr:"🇨🇳 **GUANXI ACCÉLÉRÉ** — 1 semaine hybride (3j présentiel + 2j en ligne). Business Chinese, WeChat, Alibaba, culture Guanxi. **400 € / participant**. Coach : **Wang Yixin** (Institut Confucius). WhatsApp : 06 01 75 30 43 📱",
     en:"🇨🇳 **GUANXI ACCELERATED** — 1 hybrid week (3 days in-person + 2 online). Business Chinese, WeChat, Alibaba, Guanxi culture. **€400 / participant**. Coach: **Wang Yixin** (Confucius Institute). WhatsApp: 06 01 75 30 43 📱"},
    {k:['wang','coach','enseignant','teacher','confucius','yixin'],
     fr:"👩‍🏫 **Wang Yixin 王艺欣** — ancienne enseignante à l'Institut Confucius. Elle aide les professionnels du business, des voyages et de la culture à mieux comprendre la Chine. Coach officielle ADC pour le programme Guanxi 🇨🇳",
     en:"👩‍🏫 **Wang Yixin 王艺欣** — former Confucius Institute Chinese teacher. She helps business, travel and culture professionals better understand China. Official ADC Guanxi program coach 🇨🇳"},
    {k:['tarif','prix','price','coût','cost','combien','how much','400'],
     fr:"💰 Tarifs : Guanxi Accéléré **400 €/participant** · Espaces créatifs : voir Peerspace · Membership : **50 €/an**. Tarifs groupe sur demande !",
     en:"💰 Pricing: Guanxi Accelerated **€400/participant** · Creative spaces: see Peerspace · Membership: **€50/year**. Group rates on request!"},
    {k:['espace','space','louer','rent','salle','room','studio','créatif','peerspace'],
     fr:"🏢 3 salles créatives de **15 places** chacune (écrans HD, WiFi fibre). Livestream, podcast, YouTube, TikTok, workshops. Réservez sur **Peerspace** ! 🔗",
     en:"🏢 3 creative rooms with **15 seats** each (HD screens, fiber WiFi). Livestream, podcast, YouTube, TikTok, workshops. Book on **Peerspace**! 🔗"},
    {k:['ellen','kountz','leadership','media','bfm','rtl','prise de parole'],
     fr:"👑 **LEADERSHIP & MEDIA MASTERY** avec **Ellen Kountz** (BFMTV, RTL, France Télévisions). Prise de parole, personal branding, gestion de crise. Sur devis — contactez-nous ! 🎤",
     en:"👑 **LEADERSHIP & MEDIA MASTERY** with **Ellen Kountz** (BFMTV, RTL, France Télévisions). Public speaking, personal branding, crisis management. Quote on request! 🎤"},
    {k:['seo','aeo','geo','webinar','webinaire','visibilité','moteur ia','herrmann'],
     fr:"🔍 **Du SEO à l'AEO** — Webinaire de Hermann Djoumessi, MA. **417 participants** ! Comment rester visible à l'ère des moteurs IA. Voir le replay : webikeo.fr 🎬",
     en:"🔍 **From SEO to AEO** — Webinar by Hermann Djoumessi, MA. **417 participants**! How to stay visible in the AI engine era. Watch the replay: webikeo.fr 🎬"},
    {k:['contact','téléphone','phone','email','mail','joindre','horaires'],
     fr:"📞 **07 58 81 90 62** | 💬 WhatsApp : **06 01 75 30 43** | ✉️ saintjosci@gmail.com | 📍 26 Rue du Chemin Vert, Paris, Bobigny 93000 | Lun-Ven 9h-20h, Sam 10h-18h",
     en:"📞 **07 58 81 90 62** | 💬 WhatsApp: **06 01 75 30 43** | ✉️ saintjosci@gmail.com | 📍 26 Rue du Chemin Vert, Paris, Bobigny 93000 | Mon-Fri 9am-8pm, Sat 10am-6pm"},
    {k:['whatsapp','groupe','group','communauté','community','rejoindre'],
     fr:"💬 Rejoignez notre **groupe WhatsApp exclusif** ADC ! Offres en avant-première, projets en direct. **06 01 75 30 43** 🚀",
     en:"💬 Join our **exclusive ADC WhatsApp group**! Early offers, live projects. **06 01 75 30 43** 🚀"},
    {k:['ia','éthique','ethical','rgpd','gdpr','données','data','souveraineté'],
     fr:"🤖 L'ADC est un **think-tank IA éthique**. Conforme GDPR, AI Act, MiCA, DSA. Données stockées **exclusivement en France et dans l'UE**. 🇪🇺",
     en:"🤖 ADC is an **ethical AI think-tank**. GDPR, AI Act, MiCA, DSA compliant. Data stored **exclusively in France and the EU**. 🇪🇺"},
    {k:['membre','member','adhésion','membership','cotisation','50'],
     fr:"🤝 Cotisation annuelle **50 €**. Accès réseau, événements exclusifs, soutien projets citoyens. Contactez-nous ! 💚",
     en:"🤝 Annual fee **€50**. Network access, exclusive events, citizen project support. Contact us! 💚"},
    {k:['startup','incubateur','incuber','créer','entrepreneur','projet'],
     fr:"🚀 Nous avons incubé **12 startups** ! Idée en IA, tech ou impact social ? Contactez-nous pour un entretien. Membership **50 €/an** 💡",
     en:"🚀 We've incubated **12 startups**! AI, tech or social impact idea? Contact us for an interview. Membership **€50/year** 💡"},
    {k:['chine','china','voyage','shenzhen','shanghai','alibaba','wechat'],
     fr:"🌏 **Immersion Chine 10 jours** (option) : Shenzhen, Shanghai, Guangzhou. Visites d'usines, rencontres fournisseurs, dîners Guanxi ✈️",
     en:"🌏 **10-Day China Immersion** (optional): Shenzhen, Shanghai, Guangzhou. Factory visits, supplier meetings, Guanxi dinners ✈️"},
    {k:['livre','book','data rules','amazon','best-seller','auteur'],
     fr:"📚 Hermann Djoumessi est auteur du **best-seller** *'Data Rules Everything Around'* sur l'IA générative. Disponible sur **Amazon** ! 🌟",
     en:"📚 Hermann Djoumessi authored the **bestseller** *'Data Rules Everything Around'* on generative AI. Available on **Amazon**! 🌟"},
    {k:['youtube','vidéo','video','chaîne','channel'],
     fr:"🎬 Chaîne YouTube : **youtube.com/@ANTOINETTEDATA** — programmes, événements, insights IA. Abonnez-vous ! 🔔",
     en:"🎬 YouTube channel: **youtube.com/@ANTOINETTEDATA** — programs, events, AI insights. Subscribe! 🔔"},
    {k:['parking','accès','transport','métro','metro','bus','voiture'],
     fr:"🚇 **Métro Ligne 5** — Bobigny-Pablo Picasso. Parking voiture disponible à proximité. Voir notre guide parking 🗺️",
     en:"🚇 **Metro Line 5** — Bobigny-Pablo Picasso. Car parking nearby. See our parking guide 🗺️"},
    {k:['partenaire','partner','comet','pink3','admp','kalakoverse','agence lfn','become'],
     fr:"🤝 Nos partenaires : Comet by Perplexity, PINK3, ADMP Virtual Incubator, SCI ST-JOS, Agence LFN, Kalakoverse Médias, Become Business Academy. Et nous soutenons Hello Mamiz ! 💚",
     en:"🤝 Our partners: Comet by Perplexity, PINK3, ADMP Virtual Incubator, SCI ST-JOS, Agence LFN, Kalakoverse Médias, Become Business Academy. And we support Hello Mamiz! 💚"},
    {k:['événement','event','nouvel an','new year','fête','celebrate'],
     fr:"🎉 Prochain événement : **Célébration du Nouvel An Chinois — Année du Cheval de Feu** ! 🐎🔥 Suivez nos réseaux pour la date !",
     en:"🎉 Upcoming event: **Chinese New Year Celebration — Year of the Fire Horse**! 🐎🔥 Follow our social media for the date!"},
    {k:['hybride','hybrid','présentiel','online','zoom','format'],
     fr:"💻🏫 Format hybride : **présentiel à Bobigny** + **Zoom Live** + **outils IA** (ChatGPT, DeepSeek). 3j en présentiel + 2j en ligne.",
     en:"💻🏫 Hybrid format: **in-person in Bobigny** + **Live Zoom** + **AI tools** (ChatGPT, DeepSeek). 3 days in-person + 2 days online."},
    {k:['certif','certificat','certificate','attestation','diplôme'],
     fr:"🎓 Attestation de formation ADC à l'issue du programme, reconnue dans notre réseau. Partenariats universitaires en cours 📜",
     en:"🎓 ADC training certificate upon program completion, recognized in our network. University partnerships in progress 📜"},
    {k:['newsletter','actualités','news','abonner','subscribe'],
     fr:"📧 Abonnez-vous à notre **newsletter** — offres ADC, actualités IA, événements. Bouton Newsletter en bas à droite ! 💌",
     en:"📧 Subscribe to our **newsletter** — ADC offers, AI news, events. Newsletter button at bottom right! 💌"},
    {k:['hermann','fondateur','founder','djoumessi','expert'],
     fr:"👨‍💼 **Hermann Djoumessi, MA** — Architecte de Données IA, expert reconnu, fondateur de l'ADC. Auteur du best-seller *Data Rules Everything*. Interviewé par Intelligence-Artificielle.com 🌟",
     en:"👨‍💼 **Hermann Djoumessi, MA** — AI Data Architect, recognized expert, ADC founder. Author of the bestseller *Data Rules Everything*. Interviewed by Intelligence-Artificielle.com 🌟"},
    {k:['ikigai','passion','carrière','career','alignement','personnel'],
     fr:"🎯 **Ikigai** au cœur de notre pédagogie ! Alignez **passion × compétences × marché × mission** pour votre plan business Chine personnalisé ✨",
     en:"🎯 **Ikigai** at the heart of our pedagogy! Align **passion × skills × market × mission** for your personalized China business plan ✨"},
    {k:['deepseek','chatgpt','ia tools','outils ia','simulation'],
     fr:"🤖 Nous utilisons **ChatGPT, DeepSeek en mode chinois**, Voice AI et simulateurs de négociation dans nos formations Guanxi. L'IA augmente votre apprentissage ! ⚡",
     en:"🤖 We use **ChatGPT, DeepSeek in Chinese mode**, Voice AI and negotiation simulators in our Guanxi training. AI amplifies your learning! ⚡"},
    {k:['prix','tarif','espace créatif','studio','podcast','livestream','location salle'],
     fr:"💰 Tarifs espaces créatifs disponibles en temps réel sur **Peerspace** : peerspace.com/uk/pages/listings/68e0596df41e8c5418a57924 📅",
     en:"💰 Creative space rates available in real time on **Peerspace**: peerspace.com/uk/pages/listings/68e0596df41e8c5418a57924 📅"},
    {k:['blockchain','crypto','web3','nft','mica','defi','pink3'],
     fr:"⛓️ ADC travaille sur des applications **blockchain éthiques** conformes MiCA 🔗. Notre partenaire **PINK3** spécialise blockchain et Web3. Transparence totale ! 🇪🇺",
     en:"⛓️ ADC works on **ethical blockchain** apps compliant with MiCA 🔗. Our partner **PINK3** specializes in blockchain and Web3. Full transparency! 🇪🇺"},
    {k:['chatbot','bot','tyna','agent','ia citoyen'],
     fr:"📱 Nos **5 chatbots citoyens 2026** : Anti-Squatteur, LCEi Immobilier, Conseiller Éthique, Gardien Souveraineté, Hub Jeunes IA (15-25 ans) 🚀",
     en:"📱 Our **5 citizen chatbots 2026**: Anti-Squatter, LCEi Real Estate, Ethics Advisor, Sovereignty Guardian, Young AI Hub (ages 15-25) 🚀"},
    {k:['financement','cpf','opco','subvention','grant','aide','eu horizon'],
     fr:"💶 Formations en cours d'éligibilité **CPF / OPCO**. Objectif **EU Horizon 2026 : 500 000 €**. Facilités de paiement disponibles ! Contactez-nous 🇪🇺",
     en:"💶 Training being made eligible for **CPF / OPCO** funding. **EU Horizon 2026 target: €500,000**. Payment facilities available! Contact us 🇪🇺"},
    {k:['tiktok','instagram','linkedin','réseau social','social media'],
     fr:"📱 Suivez-nous : **TikTok** @antoinettedata · **LinkedIn** showcase/antoinettedatacenter · **YouTube** @ANTOINETTEDATA 🔔",
     en:"📱 Follow us: **TikTok** @antoinettedata · **LinkedIn** showcase/antoinettedatacenter · **YouTube** @ANTOINETTEDATA 🔔"},
    {k:['café','thé','pause','restauration','boire'],
     fr:"☕ Des pauses thé sont prévues **toutes les 1h30** pendant nos formations intensives ! Hydratation et concentration garanties 🍵",
     en:"☕ Tea breaks are scheduled **every 90 minutes** during our intensive training sessions! Hydration and focus guaranteed 🍵"},
    {k:['horaires','ouvert','fermé','open','hours','disponible'],
     fr:"🕐 Lun-Ven : 9h-20h | Samedi : 10h-18h | Dimanche : sur RDV uniquement. Pour les événements en soirée, contactez-nous ! 🌙",
     en:"🕐 Mon-Fri: 9am-8pm | Saturday: 10am-6pm | Sunday: by appointment only. For evening events, contact us! 🌙"},
    {k:['hello mamiz','mamiz','maman','parent','enfant','santé'],
     fr:"👩‍👧 **Hello Mamiz** — notre initiative soutenue : améliorer la relation parents-enfants-santé en connectant les mamans ! 💜 hellomamiz.com",
     en:"👩‍👧 **Hello Mamiz** — our supported initiative: improving parent-child-health relationships by connecting mums! 💜 hellomamiz.com"},
    {k:['kalakoverse','média','médias','press','presse'],
     fr:"📺 **Kalakoverse Médias** est notre partenaire média. L'ADC a également été couvert par **Intelligence-Artificielle.com** et plusieurs médias tech 🗞️",
     en:"📺 **Kalakoverse Médias** is our media partner. ADC has also been covered by **Intelligence-Artificielle.com** and several tech media outlets 🗞️"},
    {k:['gdpr','rgpd','données personnelles','vie privée','privacy','cookies'],
     fr:"🛡️ Vos données sont stockées **exclusivement en France et dans l'UE** (RGPD Article 5). Pas de transfert vers des pays tiers. Transparent et éthique ! 🇪🇺",
     en:"🛡️ Your data is stored **exclusively in France and the EU** (GDPR Article 5). No transfer to third countries. Transparent and ethical! 🇪🇺"},
    {k:['inscription','inscrire','register','réserver','book','s\'inscrire'],
     fr:"📝 Pour s'inscrire : WhatsApp **06 01 75 30 43** ou email **saintjosci@gmail.com**. Réponse sous 24h ! Ou utilisez le formulaire de contact sur le site ✅",
     en:"📝 To register: WhatsApp **06 01 75 30 43** or email **saintjosci@gmail.com**. Response within 24h! Or use the contact form on the site ✅"},
    {k:['ikigai','kaizen','méthode','méthodo','pédagogie','montessori','khan','tsinghua'],
     fr:"🧠 Notre pédagogie unique : **Montessori** (autonomie) + **Khan Academy** (maîtrise) + **logique China-First** (Tsinghua University) + **outils IA** (ChatGPT, DeepSeek). Une révolution ! 🚀",
     en:"🧠 Our unique pedagogy: **Montessori** (autonomy) + **Khan Academy** (mastery) + **China-First logic** (Tsinghua University) + **AI tools** (ChatGPT, DeepSeek). A revolution! 🚀"},
    {k:['hackathon','concours','pitch','demo day','événement','meetup'],
     fr:"💡 L'ADC organise régulièrement **hackathons**, **pitch days** et **démos de projets**. Rejoignez notre WhatsApp pour être alerté en premier ! 📲",
     en:"💡 ADC regularly organizes **hackathons**, **pitch days** and **project demos**. Join our WhatsApp to be notified first! 📲"},
    {k:['équipe','team','staff','qui travaille','collaborateur'],
     fr:"👥 L'ADC compte **50+ praticiens IA** de haut niveau. Notre équipe core : Hermann Djoumessi (Président) et Kristen Girard (Vice-Présidente). Rejoignez-nous ! 💚",
     en:"👥 ADC has **50+ top-level AI practitioners**. Our core team: Hermann Djoumessi (President) and Kristen Girard (Vice-President). Join us! 💚"},
    {k:['wifi','internet','équipement','materiel','écran','screen'],
     fr:"🖥️ Nos salles sont équipées de **grands écrans HD**, **WiFi fibre**, sono, microphones et éclairage professionnel pour streaming. Tout pour votre contenu pro ! ✨",
     en:"🖥️ Our rooms are equipped with **large HD screens**, **fiber WiFi**, sound system, microphones and professional streaming lighting. Everything for pro content! ✨"},
  ],
  get(input) {
    const l = input.toLowerCase().trim();
    for (const t of this.bad) if (l.includes(t)) return this.no[this.lang];
    let best = null, score = 0;
    for (const f of this.faq) {
      const s = f.k.filter(k => l.includes(k)).length;
      if (s > score) { score = s; best = f; }
    }
    if (best && score > 0) return best[this.lang];
    return this.miss[this.lang];
  }
};

/* ── CHATBOT UI ── */
function initTyna() {
  const bub  = document.getElementById('tbub');
  const win  = document.getElementById('twin');
  const msgs = document.getElementById('tmsgs');
  const inp  = document.getElementById('tinput');
  const send = document.getElementById('tsend');
  const sugg = document.getElementById('tsugg');
  const lbtns = document.querySelectorAll('.tlang');
  let open = false;

  function escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function addMsg(text, role) {
    const d = document.createElement('div');
    d.className = `tmsg ${role}`;
    d.innerHTML = escapeHtml(text)
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function renderSugg() {
    sugg.innerHTML = '';
    TYNA.sugg[TYNA.lang].forEach(s => {
      const b = document.createElement('button');
      b.className = 'tsug'; b.textContent = s;
      b.onclick = () => send_msg(s);
      sugg.appendChild(b);
    });
  }

  function setLang(l) {
    TYNA.lang = l;
    lbtns.forEach(b => b.classList.toggle('act', b.dataset.lang === l));
    msgs.innerHTML = '';
    addMsg(TYNA.greet[TYNA.lang], 'bot');
    renderSugg();
  }

  function send_msg(txt) {
    const q = txt || inp.value.trim();
    if (!q) return;
    addMsg(q, 'usr');
    inp.value = '';
    setTimeout(() => addMsg(TYNA.get(q), 'bot'), 340);
  }

  bub.addEventListener('click', () => {
    open = !open;
    win.classList.toggle('open', open);
    document.querySelector('.tbadge').style.display = 'none';
    if (open && msgs.children.length === 0) {
      addMsg(TYNA.greet[TYNA.lang], 'bot');
      renderSugg();
    }
  });

  lbtns.forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  send.addEventListener('click', () => send_msg());
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') send_msg(); });
}

document.addEventListener('DOMContentLoaded', initTyna);
