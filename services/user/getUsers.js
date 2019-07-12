const User = require('../../models/user');
const of = require('../../helpers/of');

const getUsers = async () => {
  const [response, error] = await of(() => User.find().exec());
  return [response, error];
};

module.exports = getUsers;