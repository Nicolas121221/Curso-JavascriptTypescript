"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _homeroutesjs = require('./routes/home.routes.js'); var _homeroutesjs2 = _interopRequireDefault(_homeroutesjs);
var _userroutesjs = require('./routes/user.routes.js'); var _userroutesjs2 = _interopRequireDefault(_userroutesjs);
var _tokenroutesjs = require('./routes/token.routes.js'); var _tokenroutesjs2 = _interopRequireDefault(_tokenroutesjs);
var _alunoroutesjs = require('./routes/aluno.routes.js'); var _alunoroutesjs2 = _interopRequireDefault(_alunoroutesjs);
var _fotoroutesjs = require('./routes/foto.routes.js'); var _fotoroutesjs2 = _interopRequireDefault(_fotoroutesjs);

var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

require('./database/index.js');

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, ));
    this.app.use(_helmet2.default.call(void 0, ));

    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());

    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, "..", "uploads")));
  }

  routes() {
    this.app.use("/", _homeroutesjs2.default);
    this.app.use("/users/", _userroutesjs2.default);
    this.app.use("/tokens/", _tokenroutesjs2.default);
    this.app.use("/alunos/", _alunoroutesjs2.default);
    this.app.use("/fotos/", _fotoroutesjs2.default);
  }
}

exports. default = new App().app;
