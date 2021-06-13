const feedbackService = require('../services/feedbackService');

exports.getFeedbacks= async (req, res) => {
    
    feedbackService.getFeedbacks().then((result) => {
     res.status(result.status).send(result);
    });
};