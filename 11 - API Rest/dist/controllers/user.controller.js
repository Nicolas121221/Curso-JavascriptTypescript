"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {

  // * index
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });

      return res.json(users);
    } catch (e) {
      return res.json(null)
    }
  }

  // * show
  async show(req, res) {
    try {
      const reqId = req.params.id;
      if (!reqId) {
        return res.status(400).json({
          errors: ['ID param is missing!']
        });
      }

      const user = await _User2.default.findByPk(reqId);

      const { id, nome, email } = user;

      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.message
      })
    }
  }

  // * store
  async store(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body)

      const { id, nome, email } = novoUser;

      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.message
      })
    }
  }


  // * update
  async update(req, res) {
    try {
      const userId = req.userId;
      if (!userId) {
        return res.status(400).json({
          errors: ['ID param is missing!']
        });
      }

      const user = await _User2.default.findByPk(userId);
      if (!user) {
        return res.status(400).json({
          errors: ["user doesn't exist"]
        })
      }

      const novosDados = await user.update(req.body)

      const { id, nome, email } = novosDados;

      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.message
      })
    }
  }

  // * delete
  async delete(req, res) {
    try {
      const id = req.userId;
      if (!id) {
        return res.status(400).json({
          errors: ['ID param is missing!']
        });
      }

      const user = await _User2.default.findByPk(id);
      if (!user) {
        return res.status(400).json({
          errors: ["user doesn't exist"]
        })
      }

      await user.destroy()

      return res.json(null);
    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.message
      })
    }
  }

}

exports. default = new UserController();
