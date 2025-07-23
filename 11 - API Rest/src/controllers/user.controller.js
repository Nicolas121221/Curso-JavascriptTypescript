import User from '../models/User'

class UserController {

  // * index
  async index(req, res) {
    try {
      const users = await User.findAll({attributes: ['id', 'nome', 'email']});

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

      const user = await User.findByPk(reqId);

      const {id, nome, email} = user;

      return res.json({id, nome, email});
    } catch (e) {
      return res.json(null)
    }
  }

  // * store
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body)

      const {id, nome , email} = novoUser;

      return res.json({id, nome , email});
    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.errors.map(e => e.message)
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

      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(400).json({
          errors: ["user doesn't exist"]
        })
      }

      const novosDados = await user.update(req.body)

      const {id, nome, email} = novosDados;

      return res.json({id, nome, email});
    } catch (e) {
      console.log(e)
      return res.json(null)
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

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({
          errors: ["user doesn't exist"]
        })
      }

      await user.destroy()

      return res.json(null);
    } catch (e) {
      console.log(e)
      return res.json(null)
    }
  }

}

export default new UserController();
