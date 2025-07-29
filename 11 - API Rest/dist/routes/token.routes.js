"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _tokencontrollerjs = require('../controllers/token.controller.js'); var _tokencontrollerjs2 = _interopRequireDefault(_tokencontrollerjs);

const router = new (0, _express.Router)();

router.post('/', _tokencontrollerjs2.default.store)

exports. default = router;
