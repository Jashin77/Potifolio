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
