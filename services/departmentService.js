var contex = require("./sequalize.service");
const { Op } = require("sequelize");

exports.getDepartments = async () => {
    
    let departments = await contex.getContext().Departments.findAll({
        where: {   IsActive:{ [Op.eq]: true } }       
    });
    console.log("items dept", departments);
    return departments;
};