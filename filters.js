const _ = require('underscore')
const directory = require('./index')

module.exports = {
  keys,
  extractEach
}

function keys () {
  return _.keys(directory)
}

function extractEach (property) {
  return _.pluck(directory, property)
}
