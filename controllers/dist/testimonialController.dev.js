"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.guardarTestimonial = void 0;

var _Testimoniales = require("../models/Testimoniales.js");

var guardarTestimonial = function guardarTestimonial(req, res) {
  var _req$body, nombre, correo, mensaje, errores, testimoniales;

  return regeneratorRuntime.async(function guardarTestimonial$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // Validar
          _req$body = req.body, nombre = _req$body.nombre, correo = _req$body.correo, mensaje = _req$body.mensaje;
          errores = [];

          if (nombre.trim() === "") {
            errores.push({
              mensaje: "El nombre esta vacio"
            });
          }

          if (correo.trim() === "") {
            errores.push({
              mensaje: "El correo esta vacio"
            });
          }

          if (mensaje.trim() === "") {
            errores.push({
              mensaje: "El Mensaje esta vacio"
            });
          }

          if (!(errores.length > 0)) {
            _context.next = 13;
            break;
          }

          _context.next = 8;
          return regeneratorRuntime.awrap(_Testimoniales.Testimonial.findAll());

        case 8:
          testimoniales = _context.sent;
          // mostrar vista con errores
          res.render("testimoniales", {
            pagina: "Testimoniales",
            errores: errores,
            nombre: nombre,
            correo: correo,
            mensaje: mensaje,
            testimoniales: testimoniales
          });
          res.redirect("/testimoniales");
          _context.next = 21;
          break;

        case 13:
          _context.prev = 13;
          _context.next = 16;
          return regeneratorRuntime.awrap(_Testimoniales.Testimonial.create({
            nombre: nombre,
            correo: correo,
            mensaje: mensaje
          }));

        case 16:
          _context.next = 21;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](13);
          console.log(_context.t0);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[13, 18]]);
};

exports.guardarTestimonial = guardarTestimonial;