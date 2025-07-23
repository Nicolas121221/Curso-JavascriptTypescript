import Aluno from '../models/Aluno'

class HomeController{
  async index(req,res) {
    try{
      const novoAluno = await Aluno.create({
        nome: 'Nícolas',
        sobrenome:'Guedes',
        email: 'nicolas@email.com',
        idade: 18,
        peso:70,
        altura:1.8
      })

      res.send(novoAluno);
    }catch(e){
      console.log(e.message)
    }
  }
}

export default new HomeController();
