const express = require("express");
const User = require("../models/user");
const router = express.Router();

const UserController = require("../controller/user");

router.get('/getUser', UserController.getUsers);
router.get('/getUser/:id', UserController.getUser);
router.post('/postUser', UserController.postUser);
router.put('/postUser/:id', UserController.putUser);
router.delete('/deleteUser/:id', UserController.deleteUser);

module.exports = router