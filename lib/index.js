'use strict'
/**
 * @id keyHash
 * Very simple hash that converts strings to numbers
 * @function keyHash
 * @param key {string} - The string to hash
 * @returns hash {number}
 */
module.exports = function keyHash (key) {
  var hash = 0
  for (let i = 0, len = key.length; i < len; i++) {
    hash = ((hash << 5) + hash) + key.charCodeAt(i)
    hash |= 0
  }
  return hash
}
