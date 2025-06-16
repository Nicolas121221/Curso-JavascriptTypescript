import Aluno from '../models/Aluno'

class HomeController{
  async index(req,res) {
    const novoAluno = await Aluno.create({
      nome: 'Nícolas',
      sobrenome:'Guedes',
      email: 'nicolas@email.com',
      idade: 18,
      peso:70,
      altura:1.8
    })

    res.send(novoAluno);
  }
}

export default new HomeController();
