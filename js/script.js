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
  document.getElementById("overlay").style.display = "flex";
  document.getElementById("imgGrande").src = src;
}

function fecharImagem() {
  document.getElementById("overlay").style.display = "none";
}
