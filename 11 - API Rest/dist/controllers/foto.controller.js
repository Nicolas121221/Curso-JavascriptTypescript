"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerjs = require('../config/multer.js'); var _multerjs2 = _interopRequireDefault(_multerjs);

var _Fotojs = require('../models/Foto.js'); var _Fotojs2 = _interopRequireDefault(_Fotojs);

const upload = _multer2.default.call(void 0, _multerjs2.default).single('file');

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

        const foto = await _Fotojs2.default.create({ aluno_id, originalname, filename });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        });
      }
    })
  }
}

exports. default = new FotoController();
