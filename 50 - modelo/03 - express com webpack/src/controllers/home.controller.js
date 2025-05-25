exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.trataPost = (req,res)=>{
    res.send('Eu sou a sua rota de post')
}