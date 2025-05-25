exports.paginaInicial = (req, res, next) => {
    res.render('index')
    console.log(`Olha o que tem na req.session.nome ${req.session.nome}`)
    next()
}

exports.trataPost = (req,res)=>{
    res.send('Eu sou a sua rota de post')
}