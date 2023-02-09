const router = require('express').Router();
const Nissan = require('../../models/Nissan')

router.get('/', (req, res) => {
    Nissan.findAll().then((nissanData) => {
        res.json(nissanData)
    })

});

module.exports = router