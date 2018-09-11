const PubSub = require('../helpers/pub_sub.js');

const DetailsView = function(container){
  this.container = container;
  //a variable that stores querySelector and uses this.element instead
};

DetailsView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) => {
    const instrumentFamily = evt.detail;
    this.render(instrumentFamily);
  });
};

DetailsView.prototype.render = function(instrumentFamily){
  // Clear out the current info
  this.container.innerHTML = '';

  // Add an h2 with the name of the family
  this.addElement('h2', instrumentFamily.name);
  // Add a p with the description
  this.addElement('p', instrumentFamily.description);
  // Add the h3 with heading
  this.addElement('h3', 'Instruments include:');
  // Add a list container for the instruments
  const instrumentList = this.addElement('ul');
  // Loop over each instrument
  instrumentFamily.instruments.forEach((instrument) => {
    // Add the instrument to the list as an LI
    this.addElement('li', instrument, instrumentList);
  });
};

DetailsView.prototype.addElement = function(elementType, textContent, container) {
  // If no container is specified, use the root container
  container = container || this.container;

  // Normal 'create element, set text content, append to container' flow
  const element = document.createElement(elementType);
  element.textContent = textContent;
  container.appendChild(element);

  // Return the element (only used for the list)
  return element;
};

module.exports = DetailsView;
