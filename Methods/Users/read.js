const User = require('../../Schema/users')


const read = (data, options) => {
  return User.find(data, options)

}


module.exports = read
