const express = require('express')
const router = express.Router()
const pool = require('mariadb').createPool({
  host: 'localhost',
  user: 'pweb',
  database: 'pweb'
})

router.get('/', (req, res, next) => {
  res.render('cart')
})

router.post('/', (req, res, next) => {
  pool.getConnection()
    .then(conn => {
      conn.query('INSERT compra values (???)', [1, 'mariadb'])
        .then((res) => {
          console.log(res)
          conn.end()
        })
        .catch(err => {
          // handle error
          console.log(err)
          conn.end()
        })
    }).catch(err => {
      console.log('not connected')
      console.log(err)
    })
})

module.exports = router
