const { application } = require("express");
const express = require("express");
const router = express.Router();
const { getChoons, saveChoons, editChoons, deleteChoons } = require('../controllers/choonsController')

router.get('/', getChoons)
router.post('/', saveChoons)
router.put('/:id', editChoons)
router.delete('/:id', deleteChoons)


module.exports = router;