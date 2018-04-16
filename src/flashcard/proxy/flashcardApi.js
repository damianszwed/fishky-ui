if (process.env.NODE_ENV === 'development') {
  module.exports = require('./mockFlashcardApi');
} else {
  module.exports = require('./prodFlashcardApi');
}
