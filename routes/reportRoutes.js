//const UsersController = require('./controllers/users.controller');
// const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
//const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
// const config = require('../common/config/env.config');
const powerbiapi = require('../api/reportAPI');
const express = require("express");
const router = express.Router();

router.get('/getReports', [
    //ValidationMiddleware.validJWTNeeded,
    // PermissionMiddleware.minimumPermissionLevelRequired(PAID),
    powerbiapi.getReports

]);

module.exports = router;
