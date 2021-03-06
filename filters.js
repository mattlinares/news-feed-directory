const _ = require('underscore')
const directory = require('./data')

module.exports = {
  keys,
  extractEach
}

function keys () {
  return _.keys(directory)
}

function extractEach (property) {
  return _.filter(_.pluck(directory, property), function (value) {
    return value !== undefined
  })
}
