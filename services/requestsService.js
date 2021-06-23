var contex = require("./sequalize.service");
const { Op } = require("sequelize");

exports.getReportRequests = async () => {
   
    // join  report 
    let requests = await contex.getContext().reportRequests.findAll({
        where: {   IsActive:{ [Op.eq]: true } }       
    });
    console.log("Report requests", requests);
    return requests;
};