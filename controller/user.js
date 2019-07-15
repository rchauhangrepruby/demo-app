const resHandle = require("../helpers/resHandle");

const getUsersService = require("../services/user/getUsers");
const getUserService = require("../services/user/getUser");
const postUserService = require("../services/user/postUser");
const putUserService = require("../services/user/putUser");
const deleteUserService = require("../services/user/deleteUser");

const UserController = {
  getUsers: async (request, response) => {
    const [result, error] = await getUsersService();
    let message = "Returned all users succesfully!!";
    resHandle(response, result, message, error);
  },

  getUser: async (request, response) => {
    const [result, error] = await getUserService(request.params);
    let message = "Returned user with id " + request.params.id + "!!";
    resHandle(response, result, message, error);
  },

  postUser: async (request, response) => {
    const [result, error] = await postUserService(request.body);
    let message = "Saved new User successfully!!";
    resHandle(response, result, message, error);
  },

  putUser: async (request, response) => {
    const [result, error] = await putUserService(request.body, request.params.id);
    let message = "Updated User successfully!!";
    resHandle(response, result, message, error);
  },

  deleteUser: async (request, response) => {
    const [result, error] = await deleteUserService(request.params.id);
    let message = "Deleted User successfully!!";
    resHandle(response, result, message, error);
  },
};

module.exports = UserController;
