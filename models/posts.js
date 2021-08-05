const mongoose = require('mongoose')

const PostsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 2
    },
    description: {
        type: String,
        required: true,
        minlength: 20
    },
    category: [{
        type: String,
        required: true,
    }]
    
    
})

//UserSchema.plugin(require('mongoose-autopopulate'))

const PostsModel = mongoose.model('Posts', PostsSchema)

module.exports = PostsModel
