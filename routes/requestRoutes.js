//const UsersController = require('./controllers/users.controller');
// const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
//const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
// const config = require('../common/config/env.config');
const requestsApi = require('../api/requestsAPI');
const express = require("express");
const router = express.Router();

router.get('/getReportRequests', [
    //ValidationMiddleware.validJWTNeeded,
    // PermissionMiddleware.minimumPermissionLevelRequired(PAID),
    requestsApi.getReportRequests

]);

module.exports = router;
