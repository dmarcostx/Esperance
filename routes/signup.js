var express = require('express')
var router = express.Router()
const pool = require('mariadb').createPool({
  host: 'localhost',
  user: 'pweb',
  database: 'pweb'
})

router.get('/', (req, res, next) => {
  res.render('signup')
})

router.post('/', (req, res, next) => {
  pool.getConnection()
    .then(conn => {
      conn.query("INSERT cliente (nm_cliente,senha,nr_cpf,ds_email,nr_telefone,ds_endereco) VALUE ('"+req.body.nome+"','"+req.body.senha+"',"+req.body.cpf+",'"+req.body.email+"',"+req.body.tel+",'"+req.body.endereco+"')")
        .then((ignored) => {
          res.send('Cadastrado')
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
