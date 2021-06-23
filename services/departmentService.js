var contex = require("./sequalize.service");
const { Op } = require("sequelize");

exports.getDepartments = async () => {
    
    let departments = await contex.getContext().departments.findAll({
        where: {   isActive:{ [Op.eq]: true } }       
    });
    console.log("items dept", departments);
    return departments;
};