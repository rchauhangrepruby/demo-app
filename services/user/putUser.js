const User = require('../../models/user');
const of = require('../../helpers/of');

const putUser = async (body, id) => {
  const [user, error] = await of(() => User.findById(id).exec());
  if (!user) {
    return [undefined, error]
  }
  user.set(body);
  const [result, error2] = await of(() => user.save())
  return [result, error2];
};

module.exports = putUser;



// app.put("/people/:id", async (request, response) => {
//     try {
//         var person = await PersonModel.findById(request.params.id).exec();
//         person.set(request.body);
//         var result = await person.save();
//         response.send(result);
//     } catch (error) {
//         response.status(500).send(error);
//     }
// });