'use strict'

var test = require('tape')
var keyHash = require('../')
var isNumberLike = require('is-number-like')

var testCases = [
  'ASDFLKJH56789)*&^$`Ω≈ç√¥¨∆†',
  'hello',
  'bye',
  123456789
]

test('keyHash', function (t) {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    var hsh = keyHash(item)
    t.equals(isNumberLike(hsh), true, 'keyHash(' + item + ') return a number')
  })
})
