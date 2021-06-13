//const UsersController = require('./controllers/users.controller');
// const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
//const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
// const config = require('../common/config/env.config');
const departmentsApi = require('../api/departmentsAPI');
const express = require("express");
const router = express.Router();

router.get('/getDepartments', [
    //ValidationMiddleware.validJWTNeeded,
    // PermissionMiddleware.minimumPermissionLevelRequired(PAID),
    departmentsApi.getDepartments

]);

module.exports = router;
