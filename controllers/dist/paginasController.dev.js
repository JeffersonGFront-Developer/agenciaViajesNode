"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paginaDetalleViaje = exports.paginaTestimoniales = exports.paginaViajes = exports.paginaNosotros = exports.paginaInicio = void 0;

var _Viaje = require("../models/Viaje.js");

var _Testimoniales = require("../models/Testimoniales.js");

var paginaInicio = function paginaInicio(req, res) {
  var promiseDB, resultado;
  return regeneratorRuntime.async(function paginaInicio$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // Consulta 3 viajes del modelo viaje
          promiseDB = [];
          promiseDB.push(_Viaje.Viaje.findAll({
            limit: 3
          }));
          promiseDB.push(_Testimoniales.Testimonial.findAll({
            limit: 3
          }));
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(Promise.all(promiseDB));

        case 6:
          resultado = _context.sent;
          res.render("Inicio", {
            pagina: "Inicio",
            clase: "home",
            viajes: resultado[0],
            testimoniales: resultado[1]
          });
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](3);
          console.log("error");

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 10]]);
};

exports.paginaInicio = paginaInicio;

var paginaNosotros = function paginaNosotros(req, res) {
  res.render("nosotros", {
    pagina: "Nosotros"
  });
};

exports.paginaNosotros = paginaNosotros;

var paginaViajes = function paginaViajes(req, res) {
  var viajes;
  return regeneratorRuntime.async(function paginaViajes$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_Viaje.Viaje.findAll());

        case 2:
          viajes = _context2.sent;
          res.render("viajes", {
            pagina: "Proximos Viajes",
            viajes: viajes
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.paginaViajes = paginaViajes;

var paginaTestimoniales = function paginaTestimoniales(req, res) {
  var testimoniales;
  return regeneratorRuntime.async(function paginaTestimoniales$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_Testimoniales.Testimonial.findAll());

        case 3:
          testimoniales = _context3.sent;
          res.render("testimoniales", {
            pagina: "Testimoniales",
            testimoniales: testimoniales
          });
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Muestra un viaje por su slug


exports.paginaTestimoniales = paginaTestimoniales;

var paginaDetalleViaje = function paginaDetalleViaje(req, res) {
  var slug, viaje;
  return regeneratorRuntime.async(function paginaDetalleViaje$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          slug = req.params.slug;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_Viaje.Viaje.findOne({
            where: {
              slug: slug
            }
          }));

        case 4:
          viaje = _context4.sent;
          res.render("viaje", {
            pagina: "Informacion Viaje",
            viaje: viaje
          });
          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.paginaDetalleViaje = paginaDetalleViaje;