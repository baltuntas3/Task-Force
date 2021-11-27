const BaseService = require('./base_service')
const PostsModel = require('../models/posts')

class PostsService extends BaseService {
    model = PostsModel
}

module.exports = new PostsService()
