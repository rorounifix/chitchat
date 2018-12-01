const User = require('../../Schema/users')


const update = (id, data) => {
  return User.update(id, data)

}


module.exports = update
