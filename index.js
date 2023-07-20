// Write your code here!
// Get the main element with id 'main'
const mainElement = document.getElementById('main');

// Remove the main element from the DOM
mainElement.remove();

// Create a new h1 element and set its text content
const newHeader = document.createElement('h1');
newHeader.textContent = 'YOUR-NAME is the champion';

// Set the id attribute to 'victory'
newHeader.setAttribute('id', 'victory');

// Append the newHeader to the document body or any other container you desire
document.body.appendChild(newHeader);
