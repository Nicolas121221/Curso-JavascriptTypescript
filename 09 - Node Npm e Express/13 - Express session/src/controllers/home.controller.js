const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo:'Um Título de Testes',
    descricao:'Uma descrição de testes.'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e))

exports.paginaInicial = (req, res, next) => {
    req.session.usuario = {nome:'Nícolas', logado:true}
    res.render('index')
    console.log(`Olha o que tem na req.session.nome ${req.session.nome}`)
    next()
}

exports.trataPost = (req,res)=>{
    res.send('Eu sou a sua rota de post')
}