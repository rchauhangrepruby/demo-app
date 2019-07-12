const getUsersService = require("../services/user/getUsers");
const getUserService = require("../services/user/getUser");
const postUserService = require("../services/user/postUser");
const putUserService = require("../services/user/putUser");
const deleteUserService = require("../services/user/deleteUser");
const UserController = {
  getUsers: async (request, response) => {
    const [result, error] = await getUsersService();
    if (result) {
      response.send(result);
    } else {
      response.status(500).send(error);
    }
  },
  getUser: async (request, response) => {
    const [result, error] = await getUserService(request.params);
    if (result) {
      response.send(result);
    } else {
      response.status(500).send(error);
    }
  },
  postUser: async (request, response) => {
    const [result, error] = await postUserService(request.body);
    if (result) {
      response.send(result);
    } else {
      response.status(500).send(error);
    }
  },
  putUser: async (request, response) => {
    const [result, error] = await putUserService(request.body, request.params.id);
    if (result) {
      response.send(result);
    } else {
      response.status(500).send(error);
    }
  },
  deleteUser: async (request, response) => {
    const [result, error] = await deleteUserService(request.params.id);
    if (result) {
      response.send(result);
    } else {
      response.status(500).send(error);
    }
  },
};

module.exports = UserController;
