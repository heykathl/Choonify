const getChoons = (req, res) => {
  res.status(200).json({ message: 'Get CHOONSS'})
}

const saveChoons = (req, res) => {
  res.status(200).json({ message: "Save CHOONSSS"})
}

const editChoons = (req, res) => {
  res.status(200).json({ message: "Update CHOONSSS"})
}

const deleteChoons = (req, res) => {
  res.status(200).json({ message: "Delete CHOONSSS"})
}

module.exports = {
  getChoons,
  saveChoons,
  editChoons,
  deleteChoons
}