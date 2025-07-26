import multer from 'multer'
import multerConfig from '../config/multer.js'

import Foto from '../models/Foto.js'

const upload = multer(multerConfig).single('file');

class FotoController {
  store(req, res) {

    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code]
        })
      }


      try {
        const { aluno_id } = req.body;
        const { originalname, filename } = req.file;

        const foto = await Foto.create({ aluno_id, originalname, filename });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        });
      }
    })
  }
}

export default new FotoController();
