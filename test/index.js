'use strict'

const test = require('tape')
const keyHash = require('../')
const isNumberLike = require('is-number-like')

const testCases = [
  'ASDFLKJH56789)*&^$`Ω≈ç√¥¨∆†',
  'hello',
  'bye',
  123456789
]

test('keyHash', (t) => {
  t.plan(testCases.length)
  testCases.forEach((item) => {
    var hsh = keyHash(item)
    t.equals(isNumberLike(hsh), true, 'keyHash(' + item + ') return a number')
  })
})
