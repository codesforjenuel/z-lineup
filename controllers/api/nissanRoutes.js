const router = require('express').Router();
const Nissan = require('../../models/Nissan')

router.get('/', (req, res) => {
    Nissan.findAll().then((nissanData) => {
        res.json(nissanData)
    })

});
router.get('/:carModel', (req, res) => {
    Nissan.findAll(
        {
            where: {model: req.params.carModel}
        }
    ).then((nissanModel) => {
        res.json(nissanModel)
    })
});

module.exports = router