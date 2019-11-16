const modal = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

const modalTitulo = document.querySelector('.modal__titulo');
const modalNome = document.querySelector('.modal__nome');




for(let card of cards) {
    card.addEventListener('click', function() {
      const imgId = card.getAttribute('id');
      const tituloReceita = card.querySelector('h3').innerHTML;
      const cozinheiro = card.querySelector('p').innerHTML;
      modal.classList.add('active');
      modal.querySelector('img').src = `img/${imgId}`;
      modalTitulo.innerHTML = tituloReceita;
      modalNome.innerHTML = cozinheiro;

  })
};

const fecharModal = document.querySelector('.close-modal p').addEventListener('click', function() {
  modal.classList.remove('active');
});


modal.addEventListener('click', function() {
  modal.classList.remove('active');

})
