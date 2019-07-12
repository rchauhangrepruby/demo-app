const User = require('../../models/user');
const of = require('../../helpers/of');

const deleteUser = async (id) => {
  const [response, error] = await of(() => User.deleteOne({ _id: id }).exec());
  return [response, error];
};

module.exports = deleteUser;