const express = require('express');

const router = express.Router();
const { ApiRouter } = require('../api/api.route');

const renderView = view => (req, res) => res.render(view);

router.use('/a/api', ApiRouter);

router.get('/', renderView('signin'));

module.exports = router;
