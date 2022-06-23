const express = require("express");
const router = express.Router();
const ChoonsController = require('../controllers/choonsController')

router.get('/', ChoonsController.GetChoons)
router.post('/', ChoonsController.SaveChoons)
router.put('/:id', ChoonsController.EditChoons)
router.delete('/:id', ChoonsController.DeleteChoons)


module.exports = router;