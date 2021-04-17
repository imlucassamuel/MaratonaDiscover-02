const express = require('express')
const server = express()
//importando do arquivo routes
const routes = require('./routes')
const path = require("path")

//Usando template engine
server.set('view engine', 'ejs')

//Mudar a pasta views de local (dirname pega o local em que este arquivo está, neste caso SRC)
server.set('views', path.join(__dirname, 'views'))

//habilitar arquivos statics  --- USE serve para setar configurações para o server
server.use(express.static("public"))

//Usar o req.body
server.use(express.urlencoded({extended: true}))

//routes
server.use(routes)

//ativa o servidor na portal 3000
server.listen(3000, () => console.log('rodando'))