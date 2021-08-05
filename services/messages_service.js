const BaseService = require('./base_service')
const MessagesModel = require('../models/message_groups')

class MessagesService extends BaseService {
    model = MessagesModel

    
}

module.exports = new MessagesService()
