const User = require('../../models/user');
const of = require('../../helpers/of');

const getUser = async (params) => {
  const [response, error] = await of(() => User.findById(params.id).exec());
  return [response, error];
};

module.exports = getUser;