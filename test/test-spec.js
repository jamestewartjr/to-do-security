var expect = require('chai').expect
var test = require('../models/test.js')

describe('Test', function () {
  context('test()', function () {
    it('should exist', function () {
      expect(test).to.exist
    })
  })
})
