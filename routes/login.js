var express = require('express')
var router = express.Router()
const pool = require('mariadb').createPool({
  host: 'localhost',
  user: 'pweb',
  database: 'pweb'
})

router.get('/', (req, res, next) => {
  res.render('login', {nome: req.session.nome})
})

router.post('/', (req, res, next) => {
  pool.getConnection()
    .then(conn => {
      conn.query("SELECT * FROM cliente WHERE ds_email='" + req.body.email + "' AND senha='" + req.body.senha + "'")
        .then((cliente) => {
          req.session.nome = cliente[0].nm_cliente
          req.session.cpf = cliente[0].nr_cpf
          req.session.email = cliente[0].ds_email
          req.session.tel = cliente[0].nr_telefone
          req.session.endereco = cliente[0].ds_endereco
          res.redirect('/')
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
