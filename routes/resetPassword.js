var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
  res.render('resetPassword', { nome: req.session.nome, posted: false })
})

router.post('/', (req, res, next) => {
  res.render('resetPassword', { nome: req.session.nome, posted: true })
})

module.exports = router
