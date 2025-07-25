import Aluno from '../models/Aluno'

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        attributes:
          ['nome', 'sobrenome','email', 'idade', 'peso', 'altura']
      });

      res.json(alunos)
    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.message
      })
    }
  }

  async show(req, res) {
    try {
      const id = req.params.id;

      if (!id) {
        return res.status(400).json({
          errors: ['Id param is missing']
        })
      }

      const aluno = await Aluno.findByPk(id, {
        attributes:
          ['nome', 'sobrenome', 'email', 'idade', 'peso', 'altura']
      });
      if (!aluno) {
        return res.status(400).json({
          errors: ['Student does not exist']
        })
      }

      return res.json(aluno)

    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.message
      })
    }
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Student was not created']
        })
      }

      const { id, nome, sobrenome, email, peso, altura } = aluno

      return res.json({ id, nome, sobrenome, email, peso, altura })

    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.message
      })
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;

      if (!id) {
        return res.status(400).json({
          errors: ['Id param is missing']
        })
      }

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Student does not exist']
        })
      }

      const {nome,sobrenome,email,idade,peso,altura} = await aluno.update(req.body);
      return res.json({nome,sobrenome,email,idade,peso,altura})
    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.message
      })
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;

      if (!id) {
        return res.status(400).json({
          errors: ['Id param is missing']
        })
      }

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Student does not exist']
        })
      }

      await aluno.destroy();
      return res.json({
        deleted: true,
      })
    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.message
      })
    }
  }
}

export default new AlunoController();
