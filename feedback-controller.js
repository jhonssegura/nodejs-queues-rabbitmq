const Feedback = require('../model/Feedback.model');
const queueService = require('../microservices/producer.js');

exports.newPost = (req, res) => {
    var feedback = new Feedback(req.body);
    feedback.date = Date.now();
    feedback.save()
        .then((result) => {
            queueService.sendRabbitMQ('feedbackQueue', JSON.stringify(feedback));
            res.status(200).json({ status: 200, data: result, message: 'Success' });
        }).catch((err) => {
            res.status(400).json({ status: 400, message: err })
        });
};