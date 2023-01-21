const express = require("express")

const router = express.Router()
const Note = require("../models/note")

router.post("/", async (req, res) => {
  const note = new Note(req.body)
  await note.save()
  return res.send(note)
})

router.get("/", async (req, res) => {
  try {
    const notes = await Note.find()
    if (!notes) {
      return res.status(404).send({ message: "Note not found" })
    }
    return res.send(notes)
  } catch (error) {
    return res.send(error)
  }
})

router.get("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)
    if (!note) {
      return res.status(404).send({ message: "Note not found" })
    }
    return res.send(note)
  } catch (error) {
    return res.send(error)
  }
})

router.put("/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!note) {
      return res.status(404).send({ message: "Note not found" })
    }
    return res.send(note)
  } catch (error) {
    return res.send(error)
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id)
    if (!note) {
      return res.status(404).send({ message: "Note not found" })
    }
    return res.send({ message: "Note deleted" })
  } catch (error) {
    return res.send(error)
  }
})

module.exports = router
