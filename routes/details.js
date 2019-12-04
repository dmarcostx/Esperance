var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
  res.render('details')
})

router.post('/', (req, res, next) => {
  // add item to cart
})

module.exports = router
