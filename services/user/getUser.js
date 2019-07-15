const User = require('../../models/user');
const of = require('../../helpers/of');

const getUser = async (params) => {
  let response = [undefined];
  const [result, error] = await of(() => User.findById(params.id).exec());
  if (error || !result) {
    response.push(error ? 'Something Went Wrong' : 'user not found!!');
  }else{
    response[0]=result;
  }
  return response;
};

module.exports = getUser;