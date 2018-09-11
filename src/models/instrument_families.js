const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function() {
  this.instrumentFamilies = [
    {
      name: 'Brass',
      description: 'A brass instrument is a musical instrument that produces sound by sympathetic vibration of air in a tubular resonator in sympathy with the vibration of the player\'s lips',
      instruments: ['trumpet', 'trombone', 'horn', 'tuba', 'bugle']
    },
    {
      name: 'Strings',
      description: 'String instruments, stringed instruments, or chordophones are musical instruments that produce sound from vibrating strings when the performer plays or sounds the strings in some manner.',
      instruments: ['violin', 'double bass', 'guitar', 'sitar', 'hurdy-gurdy']
    },
    {
      name: 'Wind',
      description: 'A wind instrument is a musical instrument that contains some type of resonator (usually a tube), in which a column of air is set into vibration by the player blowing into (or over) a mouthpiece set at or near the end of the resonator.',
      instruments: ['flute', 'clarinet', 'bassoon', 'bagpipes', 'oboe']
    },
    {
      name: 'Percussion',
      description: 'A percussion instrument is a musical instrument that is sounded by being struck or scraped by a beater (including attached or enclosed beaters or rattles); struck, scraped or rubbed by hand; or struck against another similar instrument.',
      instruments: ['timpani', 'snare drum', 'bass drum', 'cymbals', 'triangle', 'tambourine']
    },
    {
      name: 'Keyboard',
      description: 'A keyboard instrument is a musical instrument played using a keyboard, a row of levers which are pressed by the fingers.',
      instruments: ['piano', 'organ', 'electronic keyboard', 'synthesizer']
    }
  ];
};

InstrumentFamilies.prototype.bindEvents = function(){
  // Broadcast the list of instrument families
  PubSub.publish('InstrumentFamilies:all-families-ready', this.instrumentFamilies);

  // Listen for when a instrument family is selected
  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    // Call a method that will publish the details for the selected index
    this.publishInstrumentFamilyDetail(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishInstrumentFamilyDetail = function(familyIndex){
  // Get the instrument family details for the selected index
  const selectedFamily = this.instrumentFamilies[familyIndex];
  // Broadcast the details of the selected instrument family
  PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
};

module.exports = InstrumentFamilies;
