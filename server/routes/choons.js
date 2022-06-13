const { application } = require("express");
const express = require("express");
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: "Get CHOONSSS"})
})

router.post('/', (req, res) => {
  res.status(200).json({ message: "Save CHOONSSS"})
})

router.put('/:id', (req, res) => {
  res.status(200).json({ message: "Update CHOONSSS"})
})

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: "Delete CHOONSSS"})
})



module.exports = router;