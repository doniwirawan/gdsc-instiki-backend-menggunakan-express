const express = require("express")

const router = express.Router()
const Note = require("../models/note")

router.post("/", async (req, res) => {
  const note = new Note(req.body)
  await note.save()
  res.send(note)
})

router.get("/", async (req, res) => {
  const notes = await Note.find()
  console.log(notes)
  res.send(notes)
})

router.get("/:id", async (req, res) => {
  const note = await Note.findById(req.params.id)
  res.send(note)
})

router.put("/:id", async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.send(note)
})

router.delete("/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  res.send({ message: "Note deleted" })
})

module.exports = router
