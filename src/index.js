import { createContact } from './modules/contact.js'
import { createNavbar } from './modules/navbar.js'
import { createHomepage } from './modules/homepage.js'
import { createMenu } from './modules/menu.js'
import './styles/style.css';
const mainContainer = document.querySelector('#content')
mainContainer.append(createNavbar(), createHomepage())
const homeButton = document.querySelector('#homeButton');
const menuButton = document.querySelector('#menuButton');
const contactButton = document.querySelector('#contactButton');

function navCheck (e) {
    if (e.target.id == 'homeButton') {
        mainContainer.lastChild.remove()
        mainContainer.append(createHomepage())
        console.log('home')
    } else if (e.target.id == 'menuButton') {
        mainContainer.lastChild.remove()
        mainContainer.appendChild(createMenu())
        console.log('menu')
    } else {
        mainContainer.lastChild.remove()
        mainContainer.appendChild(createContact())
        console.log('contact')
    }
}

homeButton.addEventListener('click', navCheck)
menuButton.addEventListener('click', navCheck)
contactButton.addEventListener('click', navCheck)

