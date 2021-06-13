const reportService = require('../services/reportService');

exports.getReports = async (req, res) => {      
    reportService.getReports().then((result) => {
     res.status(200).send(result);
    });
};