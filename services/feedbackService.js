var contex = require("./sequalize.service");
const { Op } = require("sequelize");

exports.getFeedbacks = async () => {
   
    // join  report 
    let feedbacks = await contex.getContext().feedback.findAll({
        where: {   isActive:{ [Op.eq]: true } }       
    });
    console.log("feedbacks", feedbacks);
    return feedbacks;
};