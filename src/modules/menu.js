export function createMenu() {
    const container = document.querySelector('#content')
    const menuHeader = document.createElement('h2')
    const menuContainer = document.createElement('div')
    const beveragesHeader = document.createElement('h3')
    const startersHeader = document.createElement('h3')
    const maincourseHeader = document.createElement('h3')
    const dessertHeader = document.createElement('h3')
    const beveragesContainer = document.createElement('div')
    const startersContainer = document.createElement('div')
    const maincourseContainer = document.createElement('div')
    const dessertContainer = document.createElement('div')



    const beverage1 = document.createElement('p')
    const beverage2 = document.createElement('p')
    const beverage3 = document.createElement('p')

    const starter1 = document.createElement('p')
    const starter2 = document.createElement('p')

    const maincourse1 = document.createElement('p')
    const maincourse2 = document.createElement('p')
    const maincourse3 = document.createElement('p')

    const dessert1 = document.createElement('p')
    const dessert2 = document.createElement('p')
    const dessert3 = document.createElement('p')

    beverage1.innerText = 'COCA COLA'
    beverage2.innerText = 'COFFEE'
    beverage3.innerText = 'TEA'

    starter1.innerText = 'BBQ WINGS'
    starter2.innerText = 'MOZZARELLA STICKS'

    maincourse1.innerText = 'HAMBURGER (WITH FRIES)'
    maincourse2.innerText = 'PIZZA'
    maincourse3.innerText = 'HOTDOG'

    dessert1.innerText = 'ICE CREAM'
    dessert2.innerText = 'CHEESE CAKE'
    dessert3.innerText = 'BROWNIES'

    beveragesHeader.innerText = 'BEVERAGE'
    startersHeader.innerText = 'STARTER'
    maincourseHeader.innerText = 'MAIN COURSE'
    dessertHeader.innerText = 'DESSERT'
    menuHeader.innerText = 'MENU'
    menuContainer.id = 'menuContent'

    beveragesContainer.append(beveragesHeader, beverage1, beverage2, beverage3)
    startersContainer.append(startersHeader, starter1, starter2)
    maincourseContainer.append(maincourseHeader, maincourse1, maincourse2, maincourse3)
    dessertContainer.append(dessertHeader, dessert1, dessert2, dessert3)
    menuContainer.append(menuHeader, beveragesContainer, startersContainer, maincourseContainer, dessertContainer)

    return menuContainer;
}