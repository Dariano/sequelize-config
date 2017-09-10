const models = require('../db/models')()
const User = models.Users

class UserService {
    todos() {
        return User.all()
    }
}

module.exports = new UserService()