import '@/styles/normalize.scss'
import '@/styles/reset.local.scss'
import '@/styles/global.scss'
import '@/pages/detail/detail.scss'

const allStars = document.querySelectorAll('.star')
allStars.forEach((star, i) => {
  star.addEventListener('click', () => {
    let starRating = i + 1
    console.log(starRating)
    allStars.forEach((star, j) => {
      if (starRating >= j + 1) {
        star.innerHTML = '&#9733'
      } else {
        star.innerHTML = '&#9734'
      }
    })
  })
})
