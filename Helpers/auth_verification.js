const jwt = require('jsonwebtoken')
const users = require('../Methods/Users')
const key = process.env.SECRET_KEY

module.exports = {
  verifyAuth: async ( args ) => {

    let result = {
      success:false,
      data:null
    }

    try{
      const id = jwt.verify( args, key )
      const user = await users.read({"_id":Object(id['data'])})
      if(user.length == 0) throw Error('Invalid User')
      result['success'] = true
      result['data'] = id['data']
    }catch(err){
      result['data'] = 'Invalid user'
    }

    return result

  }
}
