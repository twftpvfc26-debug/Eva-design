document.addEventListener('DOMContentLoaded', function() {

var currentLang = 'ru';

document.querySelectorAll('.service-header').forEach(function(btn) {
btn.addEventListener('click', function() {
var block = btn.parentElement;
var wasOpen = block.classList.contains('open');
document.querySelectorAll('.service-block').forEach(function(b) { b.classList.remove('open'); });
if (!wasOpen) block.classList.add('open');
});
});

var moments = {
1: { num: '1 / 5', title: 'Принципы', title_en: 'Principles', body: 'Я работаю по трём принципам: точность, вкус и смысл. Точность — потому что каждая деталь важна. Вкус — потому что дорогое не кричит, а говорит спокойно. Смысл — потому что дизайн без идеи — это просто картинка. Эти принципы — основа каждого моего проекта, от небольшого логотипа до крупных визуальных систем.', body_en: 'I work by three principles: precision, taste and meaning. Precision — because every detail matters. Taste — because expensive design does not shout, it speaks calmly. Meaning — because design without an idea is just a picture. These principles are the foundation of every project I do, from a small logo to large visual systems.' },
2: { num: '2 / 5', title: 'Опыт', title_en: 'Experience', body: 'Я начала с графики, потом ушла в веб, потом — в брендинг. Сегодня я работаю на стыке всех дисциплин: от логотипа до упаковки, от сайта до иллюстрации. Умею держать в голове целое и при этом не терять детали. За годы практики я поняла главное: дизайн — это инструмент, который помогает бренду говорить. И я умею этим инструментом пользоваться.', body_en: 'I started with graphics, then moved into web, then into branding. Today I work at the intersection of all disciplines: from logo to packaging, from website to illustration. I know how to keep the whole picture in mind without losing the details. Over the years, I have learned the main thing: design is a tool that helps a brand speak. And I know how to use that tool.' },
3: { num: '3 / 5', title: 'Изящество', title_en: 'Elegance', body: 'Я делаю проекты, которые выглядят дорого — не потому что я использую золото, а потому что я уважаю пропорции, воздух и смысл. Дорогое — это выверенное. Это когда ничего лишнего, когда каждый элемент на своём месте. Мой дизайн не кричит — он говорит спокойно и уверенно. Так делают только те, кто прошёл через сотни проектов и десятки правок. Я из таких.', body_en: 'I create projects that look expensive — not because I use gold, but because I respect proportions, breathing space and meaning. Expensive means precise. It means nothing superfluous, every element in its place. My design does not shout — it speaks calmly and confidently. That is what only those do who have been through hundreds of projects and dozens of revisions. I am one of them.' },
4: { num: '4 / 5', title: 'Экспертиза', title_en: 'Expertise', body: 'Я эксперт в дизайне. Годы практики, сотни часов работы с формой, цветом и типографикой. Я знаю, как сделать проект, который будет работать и выглядеть дорого. Моё портфолио — это проекты, которыми я горжусь. Я не боюсь сложных задач — чем масштабнее вызов, тем интереснее мне его решить. Если вы ищете дизайнера, который понимает бизнес и говорит на языке визуала — вы по адресу.', body_en: 'I am an expert in design. Years of practice, hundreds of hours working with form, color and typography. I know how to create a project that works and looks expensive. My portfolio is made of projects I am proud of. I am not afraid of complex tasks — the bigger the challenge, the more interesting it is for me to solve it. If you are looking for a designer who understands business and speaks the language of visuals — you are in the right place.' },
5: { num: '5 / 5', title: 'Сотрудничество', title_en: 'Collaboration', body: 'Расскажите мне о своей идее. Я задам правильные вопросы, предложу неожиданные варианты и найду форму, которая будет работать именно для вас. Мы вместе создадим проект, который будет отличаться от всего, что уже есть на рынке. Я не работаю по шаблонам — каждый проект для меня это диалог. Диалог о вашем бренде, вашей аудитории, вашей истории. Напишите мне в Telegram или на почту — обсудим.', body_en: 'Tell me about your idea. I will ask the right questions, offer unexpected options and find the form that will work specifically for you. Together we will create a project that stands out from everything already on the market. I do not work from templates — every project is a dialogue for me. A dialogue about your brand, your audience, your story. Message me on Telegram or by email — let us talk.' }
};

var popup = document.getElementById('momentPopup');
var popupImg = document.getElementById('momentImg');
var popupNum = document.getElementById('momentNum');
var popupTitle = document.getElementById('momentTitle');
var popupBody = document.getElementById('momentBody');
var popupClose = document.getElementById('momentClose');

document.querySelectorAll('.reveal-btn').forEach(function(btn) {
btn.addEventListener('click', function() {
var id = btn.dataset.moment;
var m = moments[id];
if (!m || !popup) return;
var card = btn.closest('.moment-card');
var img = card ? card.querySelector('.moment-photo img') : null;
if (img) popupImg.src = img.src;
popupNum.textContent = m.num;
popupTitle.textContent = currentLang === 'en' ? m.title_en : m.title;
popupBody.textContent = currentLang === 'en' ? m.body_en : m.body;
popup.classList.add('open');
document.body.style.overflow = 'hidden';
});
});

function closePopup() {
if (popup) popup.classList.remove('open');
document.body.style.overflow = '';
}
if (popupClose) popupClose.addEventListener('click', closePopup);
if (popup) popup.addEventListener('click', function(e) { if (e.target === popup) closePopup(); });
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closePopup(); });

var observer = new IntersectionObserver(function(entries) {
entries.forEach(function(entry) {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
} else {
entry.target.classList.remove('visible');
}
});
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.about-grid, .service-block, .contact-card, .hero-photo, .hero-text, .about-photo, .section-label, h2, .moment-card').forEach(function(el) {
observer.observe(el);
});

var langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(function(btn) {
btn.addEventListener('click', function() {
var lang = btn.dataset.lang;
if (lang === currentLang) return;
currentLang = lang;
langButtons.forEach(function(b) { b.classList.toggle('active', b === btn); });
document.querySelectorAll('[data-ru][data-en]').forEach(function(el) {
var val = el.dataset[lang];
if (val && val.length > 0) {
el.textContent = val;
}
});
document.documentElement.lang = lang;
});
});

});