"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _homecontrollerjs = require('../controllers/home.controller.js'); var _homecontrollerjs2 = _interopRequireDefault(_homecontrollerjs);

const router = new (0, _express.Router)();

router.get('/', _homecontrollerjs2.default.index)

exports. default = router;
