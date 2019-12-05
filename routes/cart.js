const express = require('express')
const router = express.Router()
const pool = require('mariadb').createPool({
  host: 'localhost',
  user: 'pweb',
  database: 'pweb'
})

router.get('/', (req, res, next) => {
  if(req.query.id == null)
    res.render('cart', {nome: req.session.nome})
  else {
    if(req.session.carrinho == null) {
      req.session.carrinho = []
    }
  pool.getConnection()
  .then(conn => {
    conn.query('SELECT nm_produto, vl_produto FROM produto WHERE cd_produto=' + req.query.id)
      .then((produto) => {
        req.session.carrinho.push({ nome: produto[0].nm_produto, qtd: 1, valor: produto[0].vl_produto });
        res.render('cart', { nome: req.session.nome, carrinho: req.session.carrinho })
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
  }
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
