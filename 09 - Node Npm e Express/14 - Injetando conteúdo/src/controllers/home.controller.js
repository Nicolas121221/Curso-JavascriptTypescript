exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Este será o Título da página',
        numeros: [1,2,3,4,5,6,7,8,9]
    })
    return
}

exports.trataPost = (req,res)=>{
    res.send('Eu sou a sua rota de post')
}