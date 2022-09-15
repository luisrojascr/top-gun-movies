import '@/styles/normalize.scss'
import '@/styles/reset.local.scss'
import '@/styles/global.scss'
import '@/pages/favorites/favorites.scss'

let barMenu = document.querySelector('.header-index__bars')
const mainBarMenu = document.querySelector('.main-bar__left')
barMenu.addEventListener('click', () => {
  mainBarMenu.classList.toggle('main-bar__menu')
})
