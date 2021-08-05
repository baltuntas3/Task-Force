const BaseService = require('./base_service')
const UserModel = require('../models/users')

class UserService extends BaseService {
    model = UserModel

    async createGroup(senderId,receiverId) {
        //firstly create a new message schema and refer to messages in users
        //group.push(senderId)
        //senderId.users.push(group)
        
    }
}

module.exports = new UserService()
