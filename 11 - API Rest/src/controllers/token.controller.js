import User from '../models/User.js';
import jwt from 'jsonwebtoken';

class TokenController {
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body
      if (!email || !password) {
        return res.status(401).json({
          errors: ['invalid credentials']
        })
      }

      const user = await User.findOne({ where: { email } })
      if (!user) {
        return res.status(401).json({
          errors: ['user does not exist']
        })
      }

      console.log(User)

      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({
          errors: ['invalid password']
        })
      }

      const {id} = user;
      const token = jwt.sign({id, email}, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      res.json({token});
    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: [e.message]
      })
    }
  }
}

export default new TokenController();
