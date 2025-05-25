exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input name="nome" type="text"><br>
        Outro Campo: <input type="text" name="aquiooutrocampo">
        <button>Olá mundo</button>
        </form>
        `);
}

exports.trataPost = (req,res)=>{
    res.send('Eu sou a sua rota de post')
}