"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Testimonial = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = _interopRequireDefault(require("../config/db.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Testimonial = _db["default"].define("testimoniales", {
  nombre: {
    type: _sequelize["default"].STRING
  },
  correo: {
    type: _sequelize["default"].STRING
  },
  mensaje: {
    type: _sequelize["default"].STRING
  }
});

exports.Testimonial = Testimonial;