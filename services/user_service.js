const BaseService = require('./base_service')
const UserModel = require('../models/users')

class UserService extends BaseService {
    model = UserModel

    /*async attendMeetup(User, meetup) {
        User.meetups.push(meetup)
        meetup.attendees.push(User)
        await User.save()
        await meetup.save()
    }*/
}

module.exports = new UserService()
