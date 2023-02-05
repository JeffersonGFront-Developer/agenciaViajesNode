"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _paginasController = require("../controllers/paginasController.js");

var _testimonialController = require("../controllers/testimonialController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/", _paginasController.paginaInicio);
router.get("/nosotros", _paginasController.paginaNosotros);
router.get("/viajes", _paginasController.paginaViajes);
router.get("/viajes/:slug", _paginasController.paginaDetalleViaje);
router.get("/testimoniales", _paginasController.paginaTestimoniales);
router.post("/testimoniales", _testimonialController.guardarTestimonial);
var _default = router;
exports["default"] = _default;