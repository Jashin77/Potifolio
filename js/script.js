// Tradução dinâmica PT/EN
const translations = {
  pt: {
    heroTitle: 'Braian Santos',
    heroSubtitle: 'Desenvolvedor Back-end | ASP.NET, C#, APIs, SQL',
    sobre: 'Sobre mim',
    sobreTexto: 'Sou desenvolvedor focado em back-end, com experiência em ASP.NET, C#, banco de dados e Entity Framework Core. Tenho interesse especial na construção de APIs, lógica de negócio e estruturação de aplicações escaláveis e seguras. Também possuo conhecimento em HTML, CSS e JavaScript, o que me permite integrar bem com o front-end quando necessário. Estou em constante aprendizado e sempre buscando melhorar minhas habilidades técnicas e colaborar em projetos que entreguem soluções de qualidade.',
    tecnologias: 'Tecnologias:',
    projetos: 'Projetos',
    contato: 'Contato',
    contatoTexto: 'Me envie um e-mail para',
    verNoGitHub: 'Ver no GitHub',
    quizDesc: 'Um quiz interativo sobre carros feito em ASP.NET.',
    apiDesc: 'Uma API REST para gerenciar catálogos e produtos usando .NET Core.'
  },
  en: {
    heroTitle: 'Braian Santos',
    heroSubtitle: 'Back-end Developer | ASP.NET, C#, APIs, SQL',
    sobre: 'About me',
    sobreTexto: 'I am a backend-focused developer with experience in ASP.NET, C#, databases, and Entity Framework Core. I have a special interest in building APIs, business logic, and structuring scalable and secure applications. I also have knowledge in HTML, CSS, and JavaScript, which allows me to integrate well with the frontend when needed. I am constantly learning and always looking to improve my technical skills and collaborate on projects that deliver quality solutions.',
    tecnologias: 'Technologies:',
    projetos: 'Projects',
    contato: 'Contact',
    contatoTexto: 'Send me an email at',
    verNoGitHub: 'View on GitHub',
    quizDesc: 'An interactive car quiz made with ASP.NET.',
    apiDesc: 'A REST API to manage catalogs and products using .NET Core.'
  }
};

function setLang(lang) {
  // Hero
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) heroTitle.textContent = translations[lang].heroTitle;
  const heroSub = document.querySelector('.hero p');
  if (heroSub) heroSub.textContent = translations[lang].heroSubtitle;
  // Sobre
  const sobreH2 = document.querySelector('#sobre h2');
  if (sobreH2) sobreH2.textContent = translations[lang].sobre;
  const sobreP = document.querySelector('#sobre .sobre-conteudo p');
  if (sobreP) sobreP.textContent = translations[lang].sobreTexto;
  const techH3 = document.querySelector('#sobre .tecnologias h3');
  if (techH3) techH3.textContent = translations[lang].tecnologias;
  // Projetos
  const projetosH2 = document.querySelector('#projetos h2');
  if (projetosH2) projetosH2.textContent = translations[lang].projetos;
  // Descrições dos projetos
  const quizDesc = document.querySelector('.projetos-grid .projeto:nth-child(1) p');
  if (quizDesc) quizDesc.textContent = translations[lang].quizDesc;
  const quizBtn = document.querySelector('.projetos-grid .projeto:nth-child(1) a');
  if (quizBtn) quizBtn.textContent = translations[lang].verNoGitHub;
  const apiDesc = document.querySelector('.projetos-grid .projeto:nth-child(2) p');
  if (apiDesc) apiDesc.textContent = translations[lang].apiDesc;
  const apiBtn = document.querySelector('.projetos-grid .projeto:nth-child(2) a');
  if (apiBtn) apiBtn.textContent = translations[lang].verNoGitHub;
  // Contato
  const contatoH2 = document.querySelector('footer h2');
  if (contatoH2) contatoH2.textContent = translations[lang].contato;
  const contatoP = document.querySelector('footer p:last-of-type');
  if (contatoP) contatoP.innerHTML = `${translations[lang].contatoTexto} <a href="mailto:braian.silva1313@gmail.com">braian.silva1313@gmail.com</a>`;
}

const langSwitch = document.getElementById('lang-switch');
if (langSwitch) {
  langSwitch.addEventListener('change', function() {
    setLang(this.value);
    localStorage.setItem('lang', this.value);
  });
  // Carregar idioma salvo
  const savedLang = localStorage.getItem('lang') || 'pt';
  langSwitch.value = savedLang;
  setLang(savedLang);
}
// Alternância de modo escuro
const btnDark = document.getElementById('btn-darkmode');
const iconDark = document.getElementById('icon-darkmode');
function setDarkMode(on) {
  document.body.classList.toggle('darkmode', on);
  iconDark.textContent = on ? '☀️' : '🌙';
  localStorage.setItem('darkmode', on ? '1' : '0');
}
btnDark.addEventListener('click', () => {
  setDarkMode(!document.body.classList.contains('darkmode'));
});
// Persistência do tema
if (localStorage.getItem('darkmode') === '1') {
  setDarkMode(true);
}
// Botão flutuante voltar ao topo
const btnTopo = document.getElementById('btn-topo');
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    btnTopo.classList.add('show');
  } else {
    btnTopo.classList.remove('show');
  }
});
btnTopo.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Fade-in animado nos cards de projeto
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.projeto');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  cards.forEach(card => observer.observe(card));
});
// Navegação suave para seções
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute('href'));
    if (alvo) {
      alvo.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


function abrirImagem(src) {
  // Desabilita no mobile
  if (window.innerWidth <= 600) {
    return;
  }
  document.getElementById("overlay").style.display = "flex";
  document.getElementById("imgGrande").src = src;
}

function fecharImagem() {
  document.getElementById("overlay").style.display = "none";
}
