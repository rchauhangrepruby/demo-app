const User = require('../../models/user');
const of = require('../../helpers/of');

const deleteUser = async (id) => {
  let response = [undefined];
  let [user, err1] = await of(() => User.findById(id).exec());
  
  if (err1 || !user) {
    response.push(err1 ? 'Something Went wrong' : 'user not found!!');
  }

  if (!response[1]) {
    response = await of(() => User.deleteOne({ _id: id }).exec());
  }

  return response;
};

module.exports = deleteUser;