export function createContact () {
    const contactContainer = document.createElement('div')
    const contactHeader = document.createElement('h2')
    const contactSubtext = document.createElement('h5')
    const contactEmail = document.createElement('h6')
    const contactPhone = document.createElement('h6')
    const contactAddress = document.createElement('h6')

    contactContainer.id = 'contactContent'

    contactHeader.innerText = 'CONTACT US'
    contactSubtext.innerText = 'AT LITE\'S CUSTOMERS\' CONVENIENCE AND SATISFACTION. FEEL FREE TO CONTACT US ANYTIME FOR ANY INQUIRIES OR ASSISTANCE.';
    contactEmail.innerText = 'EMAIL: CONTACT@LITESDINER.COM'
    contactPhone.innerText = 'PHONE: 012-345-6789'
    contactAddress.innerText = 'ADDRESS: 123 RANDOM STREET, RANDOM CITY'
    contactContainer.append(contactHeader, contactSubtext, contactEmail, contactPhone, contactAddress)
    return contactContainer;
}