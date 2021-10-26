const BaseService = require('./base_service')
const UserModel = require('../models/users')

class UserService extends BaseService {
    model = UserModel
}

module.exports = new UserService()
