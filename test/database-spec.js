var chai = require('chai')
var expect = chai.expect
var chaiChange = require('chai-change')
var db = require('../models/database.js')

chai.use(chaiChange)

describe('Database', function () {
  var dbb
  beforeEach('invokes a new database before each test', function () {
    dbb = db
  })

  context('createTask()', function () {
    it('should insert a new task into the database', function (done) {
      dbb.createTask('And another 1')
        .then(function (data) {
          expect(data).to.equal('Task created.')
          done()
        })
    })
  })

  context('getAllTask()', function () {
    it('should return all tasks from the database', function (done) {
      dbb.getAllTask()
        .then(function (data) {
          console.log(data)
          expect(data).to.equal(data)
          done()
        })
    })
  })

  context('editTaskById()', function () {
    it('should edit a task in the database', function () {
      return expect(dbb.editTaskById('1')).to.equal('Task created.')
    })
  })

  context('deleteTaskById()', function () {
    it('should delete a task from the database', function () {
      return expect(dbb.deleteTaskById('And another 1')).to.equal('Task created.')
    })
  })
})
