//const UsersController = require('./controllers/users.controller');
// const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
//const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
// const config = require('../common/config/env.config');
const usersApi = require('../api/usersAPI');
const express = require("express");
const router = express.Router();

router.get('/getUsers', [
    //ValidationMiddleware.validJWTNeeded,
    // PermissionMiddleware.minimumPermissionLevelRequired(PAID),
    usersApi.getUsers

]);

module.exports = router;
