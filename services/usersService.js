var contex = require("./sequalize.service");
const { Op } = require("sequelize");

exports.getUsers = async () => {
   
    // join  report 
    let users = await contex.getContext().users.findAll({
        where: {   isActive:{ [Op.eq]: true } }       
    });
    console.log("items users", users);
    return users;
};