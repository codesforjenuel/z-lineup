const router = require('express').Router();
const Nissan = require('../models/Nissan')
router.get("/", async (req, res) => {
 try { const oneModel = await Nissan.findOne({
  where: {model: "z"}
 });
 const oneNissan = oneModel.get({ plain: true})
res.render("index", oneNissan);
 } catch (err) {
  res.status(500).json(err)
 }
  
});



module.exports = router