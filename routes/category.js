const express = require('express')
const router = express.Router()
const pool = require('mariadb').createPool({
  host: 'localhost',
  user: 'pweb',
  database: 'pweb'
})

router.get('/', (req, res, next) => {
  pool.getConnection()
    .then(conn => {
      conn.query('SELECT * FROM categoria WHERE cd_categoria=' + req.query.id)
        .then((categorias) => {
          conn.query('SELECT * FROM produto')
            .then((produtos) => {
              res.render('index', { nome: req.session.nome, categorias: categorias, produtos: produtos })
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
