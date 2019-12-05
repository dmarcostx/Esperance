var express = require('express')
var router = express.Router()
const pool = require('mariadb').createPool({
  host: 'localhost',
  user: 'pweb',
  database: 'pweb'
})

router.get('/', (req, res, next) => {
  res.render('login')
})

router.post('/', (req, res, next) => {
  pool.getConnection()
    .then(conn => {
      conn.query("SELECT * FROM cliente WHERE ds_email='" + req.body.email + "' AND senha='" + req.body.senha + "'")
        .then((cliente) => {
          res.send(cliente)
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
