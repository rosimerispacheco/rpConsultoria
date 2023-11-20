openMenu.addEventListener('click', () => {
  menu.style.display = 'flex'

  menu.style.right = (menu.offsetWidth * -1) + 'px'

  openMenu.style.display = 'none'

  setTimeout(() => {
    menu.style.opacity = '1'
    menu.style.right = '0'
  }, 10)


})

closeMenu.addEventListener('click', () =>{
  menu.style.opacity = '0'

  menu.style.right = (menu.offsetWidth * -1) + 'px'

  setTimeout(() =>{
    menu.removeAttribute('style')
    openMenu.removeAttribute('style')
  },200)

})

/* CARROSSEL */
const carrossel = document.querySelector('.carrossel');
const videos = document.querySelectorAll('.video');

let currentIndex = 0;

function nextSlide() {
  currentIndex++;
  if (currentIndex > videos.length - 1) {
    currentIndex = 0;
  }
  updateCarrossel();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = videos.length - 1;
  }
  updateCarrossel();
}

function updateCarrossel() {
  const offset = -currentIndex * videos[0].offsetWidth;
  carrossel.style.transform = `translateX(${offset}px)`;
}

setInterval(nextSlide, 5000); // Troca de slide a cada 5 segundos