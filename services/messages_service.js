const BaseService = require('./base_service')
const MessagesModel = require('../models/message_groups')
const UserService = require('../services/user_service')

class MessagesService extends BaseService {
    model = MessagesModel

    async sendMessage(userId,message){
        
        const findMe=await UserService.find("60f5c357a281e40a501201b5")//currently logged in user asfffd
        const findUser= await UserService.find(userId)
        const messages = await this.add({users:{sender: findMe, receiver:findUser}})//if already exist, fint it and add this

        messages.messages.push({sender: findMe,message:"nbr asdas"})
        await messages.save()
        
    }
}

module.exports = new MessagesService()
