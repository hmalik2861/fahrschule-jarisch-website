const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const tabs = [...document.querySelectorAll('.price-tab')];
const cards = [...document.querySelectorAll('.price-card')];
const originalText = new WeakMap();

const translations = {
  'Fahrschule Jarisch · Neu-Ulm Stadtmitte': 'Fahrschule Jarisch · Neu-Ulm City Center',
  'Anmeldung Di + Do, 17:30–18:30 Uhr': 'Registration Tue + Thu, 5:30–6:30 pm',
  'Fahrschule in Neu-Ulm': 'Driving school in Neu-Ulm',
  'Dein Führerschein.': "Your driver's license.",
  'Dein nächster Schritt.': 'Your next step.',
  'Bock, mit uns durchzustarten? Egal ob Anfänger oder Fortgeschrittener – bei uns bist du genau richtig.': "Ready to get started with us? Whether you are a beginner or an advanced player — you’re in the right place.",
  'Persönlich begleitet.': 'Personal guidance.',
  'Klar erklärt.': 'Clear explanations.',
  'Jetzt anmelden': 'Register now',
  'Preise ansehen': 'View prices',
  'Scrollen': 'Scroll',
  'Klare Wege': 'Clear paths',
  'von Anmeldung bis Prüfung': 'from registration to exam',
  'Faire Preise': 'Fair prices',
  'transparent pro Klasse': 'transparent per class',
  'Direkter Kontakt': 'Direct contact',
  'in Neu-Ulm Stadtmitte': 'in Neu-Ulm city center',
  'Mehr als nur Fahrstunden': 'More than just driving lessons',
  'Einsteigen,': 'Get in,',
  'losfahren.': "let’s go.",
  'Wir machen den Weg zum Führerschein verständlich und persönlich. Du bekommst die Infos, die du brauchst – und jemanden, der dich auf dem Weg begleitet.': "We make the path to getting your driver's license understandable and personal. You get the information you need — and someone to accompany you along the way.",
  'Theorie & Praxis': 'Theory & practice',
  'mit Lernapp und Fahrstunden à 45 Minuten': 'with learning app and driving lessons of 45 minutes each',
  'Automatik oder Schaltung': 'Automatic or manual',
  'inklusive moderner Ausbildung für Klasse B': 'including a modern Class B pathway',
  'Persönlich in Neu-Ulm': 'Personal support in Neu-Ulm',
  'Augsburger Straße 58, Stadtmitte': 'Augsburger Straße 58, city center',
  'Führerscheine entdecken': 'Explore licences',
  'Deine Möglichkeiten': 'Your options',
  'Welche Klasse': 'Which class',
  'passt zu dir?': 'fits you?',
  'Vom ersten Auto bis zum Motorrad: Hier findest du den passenden Einstieg.': 'From your first car to a motorcycle: find the right starting point for you.',
  'Beliebtester Einstieg': 'Most popular entry point',
  'Klasse B': 'Class B',
  'Der klassische Autoführerschein – mit Automatikoption und begleitetem Fahren ab 17.': 'The classic car licence — with an automatic option and accompanied driving from age 17.',
  'Ab 18 Jahren, BF 17 ab 17': 'From age 18, BF 17 from age 17',
  'AM, L und dreirädrige Kfz im Inland eingeschlossen': 'AM, L and three-wheeled vehicles included domestically',
  'Prüfung auf dem Automatikfahrzeug möglich': 'Practical exam possible in an automatic vehicle',
  'Ausbildungsdetails': 'Training details',
  'Mindestens zehn Fahrstunden (à 45 Minuten) auf einem Schaltwagen.': 'At least ten driving lessons (45 minutes each) in a manual car.',
  'Mindestens 15-minütige Testfahrt auf einem Schaltwagen mit deinem Fahrlehrer.': 'At least a 15-minute assessment drive in a manual car with your instructor.',
  'Die restlichen Fahrstunden bis zur Prüfung auf dem Automatikfahrzeug.': 'The remaining lessons before the exam in an automatic vehicle.',
  'Preise für Klasse B': 'Prices for Class B',
  'Zweirad': 'Two wheels',
  'Motorrad': 'Motorcycle',
  'Motorrad (A / A1 / A2)': 'Motorcycle (A / A1 / A2)',
  'A, A2 und A1 – für deinen Einstieg auf zwei Rädern.': 'A, A2 and A1 — for getting started on two wheels.',
  'A: Direkteinstieg ab 24': 'A: direct entry from age 24',
  'A2 ab 18 Jahren': 'A2 from age 18',
  'A1 ab 16 Jahren, bis 125 cm³': 'A1 from age 16, up to 125 cc',
  'Weitere Voraussetzungen': 'More requirements',
  'A: 21 Jahre für dreirädrige Kfz über 15 kW oder Aufstieg nach 2 Jahren A2.': 'A: age 21 for three-wheeled vehicles over 15 kW, or an upgrade after 2 years of A2.',
  'A2: Aufstieg nach mindestens 2 Jahren A1 möglich.': 'A2: upgrade possible after at least 2 years of A1.',
  'A1: maximal 11 kW, 0,1 kW/kg und dreirädrige Kfz bis 15 kW.': 'A1: maximum 11 kW, 0.1 kW/kg and three-wheeled vehicles up to 15 kW.',
  'Motorradpreise ansehen': 'View motorcycle prices',
  'Erweitern': 'Extend',
  'Anhänger & Mofa': 'Trailers & mopeds',
  'BE, B96 und AM für mehr Freiheit im Alltag.': 'BE, B96 and AM for more freedom in everyday life.',
  'BE für Anhänger': 'BE for trailers',
  'B96 als Erweiterung': 'B96 as an extension',
  'AM & L im Mehrfachklassen-Preis': 'AM & L in the multiple-class price',
  'Erweiterungen ansehen': 'View extensions',
  'Motorradführerschein in Neu-Ulm': 'Motorcycle licence in Neu-Ulm',
  'Bei einem Vorbesitz von A1 oder A2 ist der Aufstieg über eine Prüfung möglich.': 'If you already hold A1 or A2, an upgrade through an exam is possible.',
  '· Bei einem Vorbesitz von A1 oder A2 ist der Aufstieg über eine Prüfung möglich.': '· If you already hold A1 or A2, an upgrade through an exam is possible.',
  'Beratung anfragen': 'Request advice',
  'So läuft es': 'How it works',
  'Dein Weg zum': 'Your road to',
  'Führerschein.': "a driver's license.",
  'Einfach starten. Dranbleiben. Sicher ankommen.': 'Start simply. Stay on track. Arrive safely.',
  'Kontakt aufnehmen': 'Get in touch',
  'Komm zu den Anmeldezeiten vorbei oder ruf uns direkt an. Wir klären deine Fragen persönlich.': 'Visit during registration hours or call us directly. We will answer your questions personally.',
  'Theorie starten': 'Start theory',
  'Die Theorie findet Dienstag und Donnerstag von 18:30 bis 20:00 Uhr statt – inklusive Lernapp.': 'Theory takes place Tuesday and Thursday from 6:30 to 8:00 pm — including the learning app.',
  'Fahrstunden meistern': 'Master your lessons',
  'Mit mindestens zehn Schaltstunden bei Klasse B und einem klaren Plan Richtung Prüfung.': 'With at least ten manual lessons for Class B and a clear plan towards the exam.',
  'Transparent kalkuliert': 'Transparent pricing',
  'Preise, die': 'Prices that',
  'klar bleiben.': 'remain transparent.',
  'Alle Beträge aus der aktuellen Preisübersicht von Fahrschule Jarisch. Fahrstunden dauern jeweils 45 Minuten.': 'All amounts are from the current price list of the Jarisch driving school. Driving lessons last 45 minutes each.',
  'Alle': 'All',
  'Führerschein': 'Driver’s licence',
  'Anhänger': 'Trailer',
  'Erweiterung': 'Extension',
  'Leichtfahrzeug': 'Light vehicle',
  'Grundbetrag': 'Basic amount',
  'Theorieprüfung': 'Theory test',
  'Praktische Prüfung': 'Practical exam',
  'Fahrstunde': 'Driving lesson',
  'Sonderfahrten': 'Special trips',
  'je 45 Minuten': '45 minutes each',
  'Mehrfachklassen': 'Multiple classes',
  'Seminare': 'Seminars',
  'Aufbauseminar für Fahranfänger (ASF)': 'Advanced training seminar for novice drivers (ASF)',
  'Ausbildungskurs nach § 5 Abs. 2 FeV (Mofa)': 'Training course according to § 5 para. 2 FeV (moped)',
  'Grundbetrag für allgemeine Aufwendungen einschließlich theoretischem Unterricht und Lernapp. Änderungen vorbehalten.': 'Basic amount for general expenses including theory lessons and the learning app. Subject to change.',
  'Für Fahranfänger': 'For novice drivers',
  'Aufbauseminar': 'Advanced training seminar',
  'Wer innerhalb der zweijährigen Probezeit auffällig wird, muss an einem Aufbauseminar für Fahranfänger teilnehmen. Das Seminar unterstützt dich dabei, dein Fahrverhalten zu ändern und dich zukünftig vorschriftsmäßig im Straßenverkehr zu verhalten.': 'Anyone who receives a traffic violation during the two-year probationary period must take an advanced training seminar for novice drivers. The seminar supports you in changing your driving behaviour and following road rules in the future.',
  'ASF anfragen': 'Ask about ASF',
  'Aufbauseminar\nfür Fahranfänger': 'Advanced training seminar\nfor novice drivers',
  'Klar bleiben.\nWeiterfahren.': 'Stay clear.\nKeep moving.',
  'Kurz erklärt': 'Quick answers',
  'Deine Fragen.': 'Your questions.',
  'Unsere Antworten.': 'Our answers.',
  'Wenn deine Frage hier nicht dabei ist, ruf uns direkt an oder schreib uns eine E-Mail.': 'If your question is not answered here, call us directly or send us an email.',
  'Wie lange dauert eine Fahrstunde?': 'How long is a driving lesson?',
  'Eine Fahrstunde dauert jeweils 45 Minuten. Die Preise findest du übersichtlich nach Führerscheinklasse sortiert.': 'Each driving lesson lasts 45 minutes. Prices are clearly organised by licence class.',
  'Wann findet der Theorieunterricht statt?': 'When does theory take place?',
  'Dienstag und Donnerstag von 18:30 bis 20:00 Uhr. Die Anmeldung ist an diesen Tagen von 17:30 bis 18:30 Uhr möglich.': 'Tuesday and Thursday from 6:30 to 8:00 pm. Registration is available on those days from 5:30 to 6:30 pm.',
  'Kann ich Klasse B auf Automatik machen?': 'Can I take Class B in an automatic car?',
  'Ja. Nach mindestens zehn Fahrstunden auf einem Schaltwagen und einer mindestens 15-minütigen Testfahrt können die restlichen Fahrstunden und die praktische Prüfung auf dem Automatikfahrzeug stattfinden.': 'Yes. After at least ten lessons in a manual car and a 15-minute assessment drive, the remaining lessons and practical exam can take place in an automatic vehicle.',
  'Welche Sprachen werden im Unterricht angeboten?': 'Which languages are available for instruction?',
  'Die Website ist auf Deutsch und Englisch verfügbar. Bitte kontaktiere uns direkt, um die verfügbaren Sprachen für Theorie und praktische Ausbildung zu bestätigen.': 'The website is available in German and English. Please contact us directly to confirm the available languages for theory and practical instruction.',
  'Bereit zum Start?': 'Ready to start?',
  'Komm vorbei.': 'Come visit us.',
  'Wir freuen uns.': 'We look forward to meeting you.',
  'Ob Anfänger oder Fortgeschrittener: Schreib uns, ruf an oder komm zu den Anmeldezeiten direkt vorbei.': 'Whether you are a beginner or an advanced driver: write to us, call us or visit during registration hours.',
  'Anrufen': 'Call',
  'E-Mail schreiben': 'Write an email',
  'Ansprechpartner': 'Contact person',
  'Öffnungszeiten': 'Opening hours',
  'Dienstag & Donnerstag': 'Tuesday & Thursday',
  'Anmeldung · 17:30–18:30 Uhr': 'Registration · 5:30–6:30 pm',
  'Theorieunterricht · 18:30–20:00 Uhr': 'Theory · 6:30–8:00 pm',
  '89231 Neu-Ulm, Stadtmitte': '89231 Neu-Ulm, city center',
  'Route öffnen': 'Get directions',
  'Schnelle Anfrage': 'Quick enquiry',
  'Du hast eine Frage?': 'Have a question?',
  'Schreib uns.': 'Write to us.',
  'Fülle das Formular aus. Dein E-Mail-Programm öffnet sich anschließend mit einer vorbereiteten Nachricht.': 'Fill out the form. Your email program will then open with a prepared message.',
  'Dein Name': 'Your name',
  'Vor- und Nachname': 'First and last name',
  'E-Mail-Adresse': 'Email address',
  'du@beispiel.de': 'you@example.com',
  'Führerscheinklasse': 'Licence class',
  'Andere Frage': 'Other question',
  'Deine Nachricht': 'Your message',
  'Wobei können wir helfen?': 'How can we help?',
  'Nachricht vorbereiten': 'Prepare message',
  'Navigation': 'Navigation',
  'Rechtliches': 'Legal',
  'Impressum': 'Legal notice (German)',
  'Datenschutz': 'Privacy policy (German)',
  'Dein Führerschein in Neu-Ulm.': 'Your driving licence in Neu-Ulm.',
  'Persönlich. Klar. Direkt.': 'Personal. Clear. Direct.',
  'Menü öffnen': 'Open menu',
  'Sprache wählen': 'Choose language',
  'Sprache': 'Language',
  'Führerscheine': 'Driving licences',
  'Preise': 'Prices',
  'Kontakt': 'Contact',
  'Bock, mit uns durchzustarten? Dann komm vorbei! Egal ob Anfänger oder Fortgeschrittener, bei uns bist du genau richtig.': "Ready to get started with us? Come by! Whether you are a beginner or an advanced driver, you’re in the right place."
};

const normalize = (text) => text.replace(/\s+/g, ' ').trim();

const translateTextNodes = (lang) => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement?.closest('script,style,[translate="no"]')) continue;
    nodes.push(node);
  }
  nodes.forEach((textNode) => {
    if (!originalText.has(textNode)) originalText.set(textNode, textNode.nodeValue);
    const source = originalText.get(textNode);
    const key = normalize(source);
    const value = lang === 'en' ? translations[key] : key;
    if (!value || value === key) {
      textNode.nodeValue = source;
      return;
    }
    const leading = source.match(/^\s*/)?.[0] || '';
    const trailing = source.match(/\s*$/)?.[0] || '';
    textNode.nodeValue = `${leading}${value}${trailing}`;
  });
};

const translateAttributes = (lang) => {
  const english = lang === 'en';
  const attributes = english
    ? { 'Vor- und Nachname': 'First and last name', 'du@beispiel.de': 'you@example.com', 'Wobei können wir helfen?': 'How can we help?' }
    : { 'First and last name': 'Vor- und Nachname', 'you@example.com': 'du@beispiel.de', 'How can we help?': 'Wobei können wir helfen?' };
  document.querySelectorAll('[placeholder]').forEach((element) => {
    if (attributes[element.placeholder]) element.placeholder = attributes[element.placeholder];
  });
};

const setLanguage = (lang, { persist = true } = {}) => {
  const next = lang === 'en' ? 'en' : 'de';
  document.documentElement.lang = next;
  document.documentElement.dir = 'ltr';
  translateTextNodes(next);
  translateAttributes(next);
  document.title = next === 'en' ? "Jarisch Driving School · Your licence in Neu-Ulm" : 'Fahrschule Jarisch · Dein Führerschein in Neu-Ulm';
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = next === 'en' ? 'Jarisch Driving School in Neu-Ulm — licence categories, prices, ASF and personal registration.' : 'Fahrschule Jarisch in Neu-Ulm – Führerscheinklassen, Preise, ASF und persönliche Anmeldung.';
  document.querySelectorAll('[data-language]').forEach((link) => {
    const active = link.dataset.language === next;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
    link.href = `?lang=${link.dataset.language}${window.location.hash}`;
  });
  const languageGroup = document.querySelector('.language-switcher');
  languageGroup?.setAttribute('aria-label', next === 'en' ? 'Choose language' : 'Sprache wählen');
  menuToggle?.setAttribute('aria-label', next === 'en' ? 'Open menu' : 'Menü öffnen');
  if (persist) {
    try { localStorage.setItem('fj-language', next); } catch (_) { /* storage can be unavailable in private browsing */ }
  }
};

const queryLanguage = new URLSearchParams(window.location.search).get('lang');
let initialLanguage = queryLanguage === 'en' ? 'en' : 'de';
try { if (!queryLanguage && localStorage.getItem('fj-language') === 'en') initialLanguage = 'en'; } catch (_) { /* ignore storage restrictions */ }
setLanguage(initialLanguage, { persist: false });

document.querySelectorAll('[data-language]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const next = link.dataset.language;
    setLanguage(next);
    const url = `${window.location.pathname}?lang=${next}${window.location.hash}`;
    window.history.replaceState({}, '', url);
    siteNav?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

menuToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav?.querySelectorAll('a:not([data-language])').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 10);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const setPriceFilter = (filter) => {
  tabs.forEach((tab) => {
    const active = tab.dataset.filter === filter;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
  });
  cards.forEach((card) => card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.class !== filter));
};

tabs.forEach((tab) => tab.addEventListener('click', () => setPriceFilter(tab.dataset.filter)));
document.querySelectorAll('[data-filter-link]').forEach((link) => link.addEventListener('click', () => setPriceFilter(link.dataset.filterLink)));

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        instance.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else revealItems.forEach((item) => item.classList.add('is-visible'));

const contactForm = document.querySelector('#contact-form');
const contactClass = contactForm?.querySelector('select[name="class"]');
document.querySelectorAll('[data-form-class]').forEach((link) => {
  link.addEventListener('click', () => {
    if (contactClass) contactClass.value = link.dataset.formClass;
    window.setTimeout(() => contactForm?.querySelector('input[name="name"]')?.focus({ preventScroll: true }), 450);
  });
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const selectedClass = String(data.get('class') || '').trim();
  const message = String(data.get('message') || '').trim();
  const lang = document.documentElement.lang;
  const subject = encodeURIComponent(`${lang === 'en' ? 'Enquiry' : 'Anfrage'} · ${selectedClass}`);
  const body = encodeURIComponent(`${lang === 'en' ? 'Name' : 'Name'}: ${name}\n${lang === 'en' ? 'Email' : 'E-Mail'}: ${email}\n${lang === 'en' ? 'Licence class' : 'Führerscheinklasse'}: ${selectedClass}\n\n${message}`);
  const status = document.querySelector('#form-status');
  if (status) status.textContent = lang === 'en' ? 'Your email program is opening with the enquiry prepared.' : 'Dein E-Mail-Programm öffnet sich mit der vorbereiteten Anfrage.';
  window.location.href = `mailto:info@fahrschule-jarisch.de?subject=${subject}&body=${body}`;
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
