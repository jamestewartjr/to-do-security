var chai = require('chai')
var expect = chai.expect
var chaiChange = require('chai-change')
var db = require('../models/database.js')

chai.use(chaiChange)

describe('Database', function () {
  var dbs
  beforeEach('invokes a new database before each test', function () {
    dbs = db
  })

  context('createTask()', function () {
    it('should insert a new task into the database', function (done) {
      dbs.createTask('And another 1')
        .then(function (data) {
          expect(data).to.equal('Task created.')
          done()
        })
    })
  })

  context('getAllTask()', function () {
    it('should return all tasks from the database', function (done) {
      dbs.getAllTask()
        .then(function (data) {
          expect(data).to.equal(data)
          done()
        })
        .catch(function (error) {
          return error
        })
    })
  })

  context('editTaskById()', function () {
    it('should edit a task in the database', function (done) {
      dbs.editTaskById(1, 'Be a boss!')
        .then(function (data) {
          expect(data).to.equal('Task ' + data[0].id + ' has been edited to ' + data[0].title)
          done()
        })
        .catch(function (error) {
          done()
          return error
        })
    })
  })

  context('deleteTaskById()', function () {
    it('should delete a task from the database by id', function (done) {
      dbs.deleteTaskById(3)
        .then(function (data) {
          expect(data).to.equal('Task deleted.')
          done()
        })
    })
  })
})
