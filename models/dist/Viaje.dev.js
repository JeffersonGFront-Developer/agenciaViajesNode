"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Viaje = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = _interopRequireDefault(require("../config/db.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Viaje = _db["default"].define("viajes", {
  titulo: {
    type: _sequelize["default"].STRING
  },
  precio: {
    type: _sequelize["default"].STRING
  },
  fecha_ida: {
    type: _sequelize["default"].DATE
  },
  fecha_vuelta: {
    type: _sequelize["default"].DATE
  },
  imagen: {
    type: _sequelize["default"].STRING
  },
  descripcion: {
    type: _sequelize["default"].STRING
  },
  disponibles: {
    type: _sequelize["default"].STRING
  },
  slug: {
    type: _sequelize["default"].STRING
  }
});

exports.Viaje = Viaje;