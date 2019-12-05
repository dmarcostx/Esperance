var express = require('express')
var router = express.Router()
const pool = require('mariadb').createPool({
  host: 'localhost',
  user: 'pweb',
  database: 'pweb'
})

router.get('/', (req, res, next) => {
  console.log(req.session)
  pool.getConnection()
    .then(conn => {
      conn.query('SELECT * FROM categoria')
        .then((categorias) => {
          conn.query('SELECT * FROM produto')
            .then((produtos) => {
              res.render('index', { categorias: categorias, produtos: produtos })
            })
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
