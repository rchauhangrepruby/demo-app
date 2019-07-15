const User = require('../../models/user');
const of = require('../../helpers/of');

const getUsers = async () => {
  const response = await of(() => User.find().exec());
  if (response[1] || !response[0][0]){
    response[1] = response[1]? "Something Went Wrong":"No users found";
    response[0]=undefined;
  }
  return response;
};

module.exports = getUsers;