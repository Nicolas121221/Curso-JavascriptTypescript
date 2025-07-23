import User from '../models/User'

class UserController {

  // * index
  async index(req, res) {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (e) {
      return res.json(null)
    }
  }

  // * store
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body)

      return res.json(novoUser);
    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.errors.map(e => e.message)
      })
    }
  }

  // * show
  async show(req, res) {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({
          errors: ['ID param is missing!']
        });
      }

      const user = await User.findByPk(id);
      return res.json(user);
    } catch (e) {
      return res.json(null)
    }
  }

  // * update
  async update(req, res) {
    try {
      const id = req.params.id;
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

      const novosDados = await user.update(req.body)

      return res.json(novosDados);
    } catch (e) {
      console.log(e)
      return res.json(null)
    }
  }

  // * delete
  async delete(req, res) {
    try {
      const id = req.params.id;
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

      return res.json(user);
    } catch (e) {
      console.log(e)
      return res.json(null)
    }
  }

}

export default new UserController();
