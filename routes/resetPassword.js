const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()
const pool = require('mariadb').createPool({
  host: 'localhost',
  user: 'pweb',
  database: 'pweb'
})

async function mail (req) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '@gmail.com',
      pass: ''
    }
  })
  pool.getConnection()
    .then(conn => {
      conn.query("SELECT senha FROM cliente WHERE ds_email='" + req.body.email + "'")
        .then((senha) => {
          transporter.sendMail({
            from: '"" <@gmail.com>',
            to: req.body.email,
            subject: 'Sua senha na loja Esperance',
            text: 'Sua senha é ' + senha[0].senha,
            html: 'Sua senha é ' + senha[0].senha
          })
        })
        .catch(err => {
          console.log(err)
          conn.end()
        })
    }
    ).catch(err => {
      console.log('not connected')
      console.log(err)
    })
}

router.get('/', (req, res, next) => {
  res.render('resetPassword', { nome: req.session.nome, posted: false })
})

router.post('/', (req, res, next) => {
  mail(req).catch(console.error)
  res.render('resetPassword', { nome: req.session.nome, posted: true })
})

module.exports = router
