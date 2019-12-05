var express = require('express')
var router = express.Router()
const pool = require('mariadb').createPool({
  host: 'localhost',
  user: 'pweb',
  database: 'pweb'
})

router.get('/', (req, res, next) => {
  pool.getConnection()
    .then(conn => {
      conn.query("SELECT * FROM produto WHERE nm_produto LIKE '%" + req.query.busca + "%'")
        .then((produtos) => {
          res.render('search', { nome: req.session.nome, produtos: produtos })
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
