const departmentService = require('../services/departmentService');


exports.getDepartments = async (req, res) => {
    
    departmentService.getDepartments().then((result) => {
     res.send(result);
    });
};