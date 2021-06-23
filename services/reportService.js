var contex = require("./sequalize.service");
//var ReportFilters = contex.getContext().reportFilters;
const { Op } = require("sequelize");

exports.getWorkspaceByReportId = async (reportId) => {
    let keys = Object.keys(model);
    let report = await contex.getContext().reports.findAll({
        where: {
            reportId:reportId
    }
    }); 
    return report.workspaceId;
};

exports.getReportParams = async (reportId) => {
   
    // join  report 
    let report = await contex.getContext().reports.findOne({
        where: {   id:{ [Op.eq]: reportId } },
        include: [{ model: contex.getContext().reportFilters, as: 'reportFilters'}]
    });    
    return report;
};

exports.getReports = async () => {
   
    // join  report 
    let reports = await contex.getContext().reports.findAll({
        where: {   isActive:{ [Op.eq]: true } }
    }); 
    return reports;
};

exports.getReportsByuser = async (email) => {
   try {
    let user = await contex.getContext().users.findOne({
        where: {   isActive:{ [Op.eq]: true }, username: { [Op.eq]: email } }
    });
    //var ReportAccess = require('../models/ReportAccess');
    console.log('user obj', user)
    // join  report 
    let reports = await contex.getContext().reportAccess.findAll({

        include: [            
            {
              model: contex.getContext().reports,
              as: 'report',
              require: true   
            }
          ],       
        where: { isActive:{ [Op.eq]: true },  [Op.or]: [{userId:  user.userId}]   }
    });
    console.log('reports  ', reports);
    let reportsList = reports.map(c => c.report);
    
    console.log('reports', reports);
    return reportsList;
  } catch(e){
    console.log(e);
  }

};