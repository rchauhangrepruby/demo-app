const User = require('../../models/user');
const of = require('../../helpers/of');

const postUser = async (params) => {
  user = new User(params);
  const [response, error] = await of(() => user.save());
  return [response, error];
};

module.exports = postUser;