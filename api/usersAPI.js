const userService = require('../services/usersService');

exports.getUsers = async (req, res) => {    
    userService.getUsers().then((result) => {
     res.status(result.status).send(result);
    });
};