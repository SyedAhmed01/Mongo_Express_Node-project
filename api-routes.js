
let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API is Working'
    });
});

var controller = require('./controller');

router.route('/contacts')
    .get(controller.index)
    .post(controller.new);

router.route('/contacts/:contact_id')
    .get(controller.view)
    .patch(controller.update)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;