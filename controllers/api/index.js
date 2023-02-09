const router = require('express').Router();
const nissanRoutes = require('./nissanRoutes');

router.use('/nissan', nissanRoutes);

module.exports = router