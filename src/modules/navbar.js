export function createNavbar() {
    const navContainer = document.createElement('nav');
    const logoImage = document.createElement('img');
    const navButtons = document.createElement('ul');
    const homeButton = document.createElement('li');
    const menuButton = document.createElement('li');
    const contactButton = document.createElement('li');

    homeButton.innerText = 'HOME';
    menuButton.innerText = 'MENU';
    contactButton.innerText = 'CONTACT';

    homeButton.id = 'homeButton';
    homeButton.classList.add('navButton');
    menuButton.id = 'menuButton';
    menuButton.classList.add('navButton');
    contactButton.id = 'contactButton';
    contactButton.classList.add('navButton');

    navButtons.append(homeButton, menuButton, contactButton);

    navContainer.append(logoImage, navButtons);

    return navContainer;
}