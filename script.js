const swiper = new Swiper('.swiper', {
    slidesPerView: 1, // Padrão: dispositivos móveis mostram 1 slide
    breakpoints: {
        640: { // Quando a tela é maior que 640px
        slidesPerView: 2,
        },
        1024: { // Quando a tela é maior que 1024px
        slidesPerView: 3,
        }
    }
});

// pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//     },

// function scrollToElement(element){
//     element.scrollIntoView({ behavior: 'smooth'});
// }

// let harry = document.getElementById('harry-potter');
// let naruto = document.getElementById('naruto');
// let friends = document.getElementById('friends');
// let game = document.getElementById('game-of-thrones');


// harry.addEventListener('click', () => {
//     scrollToElement(harry);
// });

// naruto.addEventListener('click', () => {
//     scrollToElement(naruto);
// })

// friends.addEventListener('click', () => {
//     scrollToElement(friends);
// })

// game.addEventListener('click', () => {
//     scrollToElement(game);
// })


document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os itens da lista
    const categorias = document.querySelectorAll('.categorias__lista li');
  
    // Adiciona o evento de clique em cada item da lista
    categorias.forEach(item => {
      item.addEventListener('click', () => {
        // Pega o valor do atributo data-target
        const sectionId = item.getAttribute('data-target');
  
        // Seleciona a seção correspondente pelo ID
        const targetSection = document.getElementById(sectionId);
  
        // Verifica se a seção existe
        if (targetSection) {
          // Faz o scroll suave até a seção
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
