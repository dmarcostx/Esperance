var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
  res.render('resetPassword', { posted: false })
})

router.post('/', (req, res, next) => {
  res.render('resetPassword', { posted: true })
})

module.exports = router
