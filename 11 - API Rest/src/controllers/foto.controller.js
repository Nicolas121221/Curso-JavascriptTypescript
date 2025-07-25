import multer from 'multer'
import multerConfig from '../config/multer.js'

const upload = multer(multerConfig).single('file');

class FotoController {
  async store(req, res) {
    try {
      return upload(req, res, (err) => {
        if (err) {
          return res.status(400).json({
            errors: [err.code]
          })
        }
        return res.json(req.file);
      }
      )
    } catch (e) {
      return res.status(400).json({
        errors: e.message
      })
    }
  }
}

export default new FotoController();
