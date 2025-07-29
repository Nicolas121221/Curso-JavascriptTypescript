"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await _Aluno2.default.findAll({
        attributes:
          ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          attributes: ['url','filename']
        }
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

      const aluno = await _Aluno2.default.findByPk(id, {
        attributes:
          ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [[_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          attributes: ['url','filename']
        }
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
      const aluno = await _Aluno2.default.create(req.body);
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

      const aluno = await _Aluno2.default.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Student does not exist']
        })
      }

      const { nome, sobrenome, email, idade, peso, altura } = await aluno.update(req.body);
      return res.json({ nome, sobrenome, email, idade, peso, altura })
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

      const aluno = await _Aluno2.default.findByPk(id);
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

exports. default = new AlunoController();
