module.exports = {
  model: {
    User: require('model/User'),
    UserImpl: require('model/UserImpl'),
    Mail: require('model/Mail'),
    MailImpl: require('model/MailImpl'),
  },
  service: {
    user: {
      UserService: require('service/user/UserService')
    }
  }
}