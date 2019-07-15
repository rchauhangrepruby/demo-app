const User = require('../../models/user');
const of = require('../../helpers/of');

const postUser = async (params) => {
  user = new User(params);
  const response = await of(() => user.save());
  if (response[1]){
    response[1] = "Something Went Wrong, was not able to save data!!";
  }
  return response;
};

module.exports = postUser;