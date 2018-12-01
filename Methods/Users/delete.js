const User = require('../../Schema/users')


module.exports = (data) => {
  return User.remove(data)

}
