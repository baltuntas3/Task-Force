const BaseService = require('./base_service')
const MessagesModel = require('../models/message_groups')
const UserService = require('../services/user_service')

class MessagesService extends BaseService {
    model = MessagesModel

    async sendMessage(userId,message){
        
        const findMe=await UserService.find("60f5c357a281e40a501201b5")//currently logged in user asfffd
        const findUser= await UserService.find(userId)
        let isMessageBoxExistMe={}//if already exist, fint it and add this
        const sendMessage={users:{sender: findMe, receiver:findUser}}
        let isTrueMe=false,isTrueUser=false
        for(let i=0;i<findMe.messages.length;i++){
            isMessageBoxExistMe = await this.find(findMe.messages[i])
            
            if(Object.keys(isMessageBoxExistMe).length!==0){
                isTrueMe=true
                break
            }
        }
        for(let i=0;i<findUser.messages.length;i++){
            const isMessageBoxExistUser = await this.find(findUser.messages[i])
            
            if(Object.keys(isMessageBoxExistUser).length!==0){
                isTrueUser=true
                break
            }
        }
        console.log(isTrueMe,isTrueUser)
        if(isTrueMe && isTrueUser){
            isMessageBoxExistMe.messages.push({sender: findMe,message:message})
            await isMessageBoxExistMe.save()
            console.log("already exist")
        }else{
            const AddMessages = await this.add(sendMessage)
            findMe.messages.push(AddMessages)
            findUser.messages.push(AddMessages)
            AddMessages.messages.push({sender: findMe,message:message})
            await AddMessages.save()
            await findMe.save()
            await findUser.save()
        }
        
        
    }
}

module.exports = new MessagesService()
