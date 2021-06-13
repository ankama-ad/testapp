const reportRequestService = require('../services/requestsService');

exports.getReportRequests = async (req, res) => {   
    reportRequestService.getReportRequests().then((result) => {
     res.status(result.status).send(result);
    });
};