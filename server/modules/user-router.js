const controller = require('./user-controller')

module.exports = (app) => {
    console.log('Rota', controller)

    app.get('/user', controller.todos)
}
