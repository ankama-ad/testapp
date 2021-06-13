//const UsersController = require('./controllers/users.controller');
// const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
// const config = require('../common/config/env.config');
const powerbiapi = require('../api/powerBIEmbedAPI');
const express = require("express");
const router = express.Router();

router.get('/getEmbedToken/:reportId', [
    // ValidationMiddleware.validJWTNeeded,
    // PermissionMiddleware.minimumPermissionLevelRequired(PAID),
    powerbiapi.getEmbebToken

]);

module.exports = router;
