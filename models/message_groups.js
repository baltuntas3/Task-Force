const mongoose = require('mongoose')

const MessageGroupsSchema = new mongoose.Schema({
    users:[{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            autopopulate: {
                maxDepth: 1
            }
           //add date or something 
        }],
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
MessageGroupsSchema.methods.findTheGroup = function (userId,cb) {
    return MessageGroupsModel.find({
        users: {
            $in: userId
        }
    });
};
MessageGroupsSchema.plugin(require('mongoose-autopopulate'))

const MessageGroupsModel = mongoose.model('MessageGroups', MessageGroupsSchema)

module.exports = MessageGroupsModel
