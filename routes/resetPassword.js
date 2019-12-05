var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.render('resetPassword', {posted: false})
})

router.post('/', function (req, res, next) {
  res.render('resetPassword', {posted: true})
})

module.exports = router
