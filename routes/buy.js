const express = require('express')
const router = express.Router()
const pool = require('mariadb').createPool({
  host: 'localhost',
  user: 'pweb',
  database: 'pweb'
})

function processBuy (req, res) {
  pool.getConnection()
    .then(conn => {
      conn.query('SELECT cd_cliente FROM cliente WHERE nr_cpf=' + req.session.cpf)
        .then((cliente) => {
          let today = new Date()
          const dd = String(today.getDate()).padStart(2, '0')
          const mm = String(today.getMonth() + 1).padStart(2, '0')
          const yyyy = today.getFullYear()
          today = yyyy + '-' + mm + '-' + dd
          conn.query('INSERT compra (cd_cliente,dt_compra) VALUE (' + cliente[0].cd_cliente + ",'" + today + "')")
          return cliente
        }).then(cliente => {
          return conn.query('SELECT MAX(cd_compra) as cd FROM compra WHERE cd_cliente=' + cliente[0].cd_cliente)
        }).then(compra => {
          req.session.carrinho.forEach(produto => {
            conn.query('INSERT produto_comprado VALUE (' + produto.codigo + ',' + compra[0].cd + ',' + produto.qtd + ',' + produto.valor + ')')
          })
          res.send('📚 Pedido realizado com sucesso')
        })
        .catch(err => {
          console.log(err)
          conn.end()
        })
    }).catch(err => {
      console.log('not connected')
      console.log(err)
    })
}

router.get('/', (req, res, next) => {
  if (req.session.nome == null) { res.render('login', { nome: req.session.nome }) } else { processBuy(req, res) }
})

router.post('/', (req, res, next) => {
  pool.getConnection()
    .then(conn => {
      conn.query("SELECT * FROM cliente WHERE ds_email='" + req.body.email + "' AND senha='" + req.body.senha + "'")
        .then((cliente) => {
          req.session.nome = cliente[0].nm_cliente
          req.session.senha = cliente[0].senha
          req.session.cpf = cliente[0].nr_cpf
          req.session.email = cliente[0].ds_email
          req.session.tel = cliente[0].nr_telefone
          req.session.endereco = cliente[0].ds_endereco
          processBuy(req, res)
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
