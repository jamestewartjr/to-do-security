var pgp = require('pg-promise')()
var db = pgp({ database: 'secure-to-do' })

function createTask (title) {
  return db.one('INSERT INTO tasks(title) VALUES ($1) RETURNING *',
    title)
  .then(function (data) {
    console.log(data)
    return ('Task created.')
  })
  .catch(function (error) {
    console.log(error)
    return error
  })
}

function getAllTask () {
  return db.many('SELECT * FROM tasks')
  .then(function (data) {
    return data
  })
  .catch(function (error) {
    return error
  })
}

function editTaskById () {
  return 3
}

function deleteTaskById () {
  return 4
}

module.exports = {
  createTask: createTask,
  getAllTask: getAllTask,
  editTaskById: editTaskById,
  deleteTaskById: deleteTaskById
}
