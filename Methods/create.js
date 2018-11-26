const User = require('../Schema/users')


const createUser = (data) => {
  return User.create(data)
  
}


module.exports = createUser
