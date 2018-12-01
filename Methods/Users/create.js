const User = require('../../Schema/users')


const create = (data) => {
  return User.create(data)

}


module.exports = create
