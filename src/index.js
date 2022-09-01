import '@/styles/normalize.scss'
import '@/styles/reset.local.scss'
import '@/styles/index.scss'

// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Interesting!'

// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(heading)
