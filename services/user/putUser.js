const User = require('../../models/user');
const of = require('../../helpers/of');

const putUser = async (body, id) => {
  let response = [undefined];
  let [user, err1] = await of(() => User.findById(id).exec());
  
  if (err1 || !user) {
    response.push(err1 ? 'Something Went wrong' : 'user not found!!');
  }

  if (!response[1]) {
    user.set(body);
    response = await of(() => user.save());
  }

  return response;

};

module.exports = putUser;