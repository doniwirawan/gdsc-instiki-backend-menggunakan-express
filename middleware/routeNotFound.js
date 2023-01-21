function routeNotFound (req, res, next) {
  res.status(404).send({ message: `Route ${req.url} Not found.` })
  next()
}

module.exports = routeNotFound
