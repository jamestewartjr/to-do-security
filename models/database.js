var pgp = require('pg-promise')()
var db = pgp({ database: 'secure-to-do' })

function createTask (title) {
  return db.one('INSERT INTO tasks(title) VALUES ($1) RETURNING *',
    title)
  .then(function (data) {
    return ('Task created.')
  })
  .catch(function (error) {
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

function editTaskById (id, title) {
  return db.any()
    .then(function (data) {
      return 'Task deleted.'
    })
    .catch(function (error) {
      return error
    })
}

function deleteTaskById (id) {
  return db.none('DELETE FROM tasks WHERE id = $1', [id])
    .then(function (data) {
      return 'Task deleted.'
    })
    .catch(function (error) {
      return error
    })
}

module.exports = {
  createTask: createTask,
  getAllTask: getAllTask,
  editTaskById: editTaskById,
  deleteTaskById: deleteTaskById
}
