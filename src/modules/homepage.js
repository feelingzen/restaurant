export function createHomepage() {
    const homeContent = document.createElement('div');
    const headingText = document.createElement('h1');
    const subText = document.createElement('h5');

    headingText.innerText = 'BBQ WINGS'
    subText.innerText = 'NOW AVAILABLE AT ALL LOCATIONS!'

    homeContent.id = 'homeContent'

    homeContent.append(headingText, subText)

    return homeContent;
}

