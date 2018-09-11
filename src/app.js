const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const DetailsView = require('./views/details_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#instrument-families');
  const familyDropdown = new SelectView(selectElement);
  familyDropdown.bindEvents();

  const infoDiv = document.querySelector('div#instrument-family-info')
  const instrumentFamilyDetails = new DetailsView(infoDiv);
  instrumentFamilyDetails.bindEvents();

  const instrumentFamiliesDataSource = new InstrumentFamilies();
  instrumentFamiliesDataSource.bindEvents();
});
