if (process.env.NODE_ENV === 'test') {
  module.exports = require('./mockFlashcardApi');
} else {
  module.exports = require('./externalFlashcardApi');
}
