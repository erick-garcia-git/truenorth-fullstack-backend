const userRoutes = function (app) {
  const { fetchTasks, completeTask } = require('../controllers');

  app.route('/tasks')
    .get(fetchTasks)
    .put(completeTask)
}

module.exports = userRoutes
