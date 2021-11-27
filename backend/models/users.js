const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 2
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    age: {
        type: Number,
        required: true,
        min: 18
    },
    messages:[{
        type: mongoose.SchemaTypes.ObjectId,
            ref: 'MessageGroups',
            
    }]
    
    
})

UserSchema.plugin(require('mongoose-autopopulate'))

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
