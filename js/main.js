/* ANTOINETTE DATA CENTER — main.js v6 */

/* ── TICKER ── */
async function initTicker() {
  const T = document.getElementById('tt');
  if (!T) return;
  const items = [
    {l:'🇺🇸 Bitcoin (BTC)',v:'~$103,400',u:true},
    {l:'🇺🇸 Ethereum (ETH)',v:'~$2,580',u:false},
    {l:'🔒 Monero (XMR)',v:'~$312',u:true},
    {l:'🇺🇸 XRP',v:'~$2.28',u:true},
    {l:'🌞 Solana (SOL)',v:'~$138',u:false},
    {l:'🇺🇸 NVIDIA',v:'~$2.94T',u:true},
    {l:'🇺🇸 Microsoft',v:'~$2.88T',u:true},
    {l:'🇺🇸 Google',v:'~$1.87T',u:false},
    {l:'🇺🇸 Meta AI',v:'~$1.42T',u:true},
    {l:'🇫🇷 Mistral AI',v:'~€6B',u:true},
    {l:'🏛️ ADC Paris, Bobigny · 50+ Praticiens IA',v:'',u:null},
    {l:'🎓 Guanxi Accéléré · 400€ · Places Limitées',v:'',u:null},
    {l:'📊 Du SEO à l\'AEO · 417 Inscrits · Hermann Djoumessi',v:'',u:null},
    {l:'📱 WhatsApp ADC · 06 01 75 30 43',v:'',u:null},
  ];
  function render() {
    T.innerHTML = [...items,...items].map(it => {
      const arr = it.u===true?`<span class="tup">▲</span>`:it.u===false?`<span class="tdn">▼</span>`:'';
      const val = it.v?`<span class="${it.u===true?'tup':it.u===false?'tdn':''}">${it.v}</span>`:'';
      return `<span class="ti">${it.l} ${val} ${arr}</span>`;
    }).join('');
  }
  render();
  try {
    const r = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,monero,ripple,solana&vs_currencies=usd',{signal:AbortSignal.timeout(4500)});
    const d = await r.json();
    if (d.bitcoin) {
      items[0].v='$'+d.bitcoin.usd.toLocaleString();
      items[1].v='$'+d.ethereum.usd.toLocaleString();
      items[2].v='$'+d.monero.usd.toLocaleString();
      items[3].v='$'+d.ripple.usd.toLocaleString();
      items[4].v='$'+d.solana.usd.toLocaleString();
      render();
    }
  } catch(e) {}
}

/* ── MOBILE MENU ── */
function toggleMenu() {
  const h = document.getElementById('hbg');
  const m = document.getElementById('mmenu');
  h.classList.toggle('open');
  m.classList.toggle('open');
}
function closeMenu() {
  document.getElementById('hbg').classList.remove('open');
  document.getElementById('mmenu').classList.remove('open');
}

/* ── CAROUSEL ── */
function initCarousel() {
  const track = document.getElementById('ct');
  const prev  = document.getElementById('cprev');
  const next  = document.getElementById('cnext');
  const dots  = document.getElementById('cdots');
  if (!track) return;
  const slides = track.querySelectorAll('.cs');
  const total  = slides.length;
  let cur = 0;
  const vis = () => window.innerWidth > 900 ? 3 : window.innerWidth > 600 ? 2 : 1;
  let v = vis();

  for (let i = 0; i <= total - v; i++) {
    const d = document.createElement('div');
    d.className = 'cdot' + (i === 0 ? ' act' : '');
    d.onclick = () => goTo(i);
    dots.appendChild(d);
  }
  function goTo(n) {
    v = vis();
    cur = Math.max(0, Math.min(n, total - v));
    const w = slides[0].offsetWidth + 14;
    track.style.transform = `translateX(-${cur * w}px)`;
    dots.querySelectorAll('.cdot').forEach((d,i) => d.classList.toggle('act', i === cur));
  }
  prev.onclick = () => goTo(cur - 1);
  next.onclick = () => goTo((cur + 1) % (total - v + 1));
  setInterval(() => goTo((cur + 1) % (total - v + 1)), 4200);
  window.addEventListener('resize', () => { v = vis(); goTo(0); });
}

/* ── YOUTUBE ── */
function playVideo(id) {
  document.getElementById('ytframe').src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
}

/* ── BLOG ── */
function toggleBlog() {
  const f = document.getElementById('bfull');
  const b = document.getElementById('brmBtn');
  const o = f.classList.toggle('open');
  b.textContent = o ? '← Voir moins' : 'Lire la suite →';
}

/* ── FAQ ── */
function toggleFaq(btn) {
  const item = btn.closest('.fi');
  const was  = item.classList.contains('open');
  document.querySelectorAll('.fi').forEach(i => i.classList.remove('open'));
  if (!was) item.classList.add('open');
}

/* ── SCROLL REVEAL ── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); } });
  }, { threshold: .1 });
  document.querySelectorAll('.reveal,.rl,.rr').forEach(el => obs.observe(el));
}

/* ── ACTIVE NAV ── */
function initActiveNav() {
  const secs  = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-pills a');
  const obs = new IntersectionObserver(en => {
    en.forEach(e => { if (e.isIntersecting) links.forEach(l => l.classList.toggle('act', l.getAttribute('href') === '#' + e.target.id)); });
  }, { threshold: .35 });
  secs.forEach(s => obs.observe(s));
}

/* ── CONTACT FORM ── */
function submitContact(e) {
  e.preventDefault();
  const b = document.getElementById('fsub');
  b.textContent = '✅ Message envoyé !';
  b.style.background = '#16a34a';
  setTimeout(() => { b.innerHTML = '✉️ Envoyer le message'; b.style.background = ''; e.target.reset(); }, 3000);
}

/* ── GDPR ── */
function initGDPR() {
  if (localStorage.getItem('gdpr_ok')) return;
  setTimeout(() => document.getElementById('gdpr').classList.add('show'), 1800);
  document.getElementById('gdpr-acc').onclick = () => { localStorage.setItem('gdpr_ok','1'); document.getElementById('gdpr').classList.remove('show'); };
  document.getElementById('gdpr-rej').onclick = () => document.getElementById('gdpr').classList.remove('show');
}

/* ── NEWSLETTER ── */
function openNewsletter() { document.getElementById('nlmod').classList.add('show'); }
function closeNewsletter() { document.getElementById('nlmod').classList.remove('show'); }
function submitNl(e) { e.preventDefault(); alert('✅ Merci ! Vous êtes inscrit à notre newsletter.'); closeNewsletter(); }
window.openNewsletter = openNewsletter;

/* ── CHATBOT OPEN ── */
function openChatbot() { document.getElementById('tbub').click(); }
window.openChatbot = openChatbot;

/* ── LANG SWITCH ── */
function switchLang(l) {
  document.querySelectorAll('.lbtn').forEach(b => b.classList.toggle('act', b.dataset.lang === l));
  document.documentElement.lang = l;
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initTicker();
  initCarousel();
  initReveal();
  initActiveNav();
  initGDPR();
});
