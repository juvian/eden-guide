window.client = window.client || {}
Object.assign(window.client, {
  items: require('../data/processed.js').items,
  translator: require('../data/translations.js')
});

module.exports = {}