const mongoose = require('mongoose')

const MessageGroupsSchema = new mongoose.Schema({
    users:{
        sender:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            autopopulate: {
                maxDepth: 1
            }
        },
        receiver:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            autopopulate: {
                maxDepth: 1
            }
            
        }
    },
    messages:[{
        sender:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            autopopulate: {
                maxDepth: 1
            }
        },
        message:String
    }]
     
})

MessageGroupsSchema.plugin(require('mongoose-autopopulate'))

const MessageGroupsModel = mongoose.model('MessageGroups', MessageGroupsSchema)

module.exports = MessageGroupsModel
