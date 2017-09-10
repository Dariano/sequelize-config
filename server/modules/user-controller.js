const UserService = require('./user-service')

class UserController {
    async todos(req, res) {
        console.log('Controller')
        res.json(await UserService.todos())
    }
}

module.exports = new UserController()