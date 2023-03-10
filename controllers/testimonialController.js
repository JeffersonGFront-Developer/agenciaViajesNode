import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
  // Validar

  const { nombre, correo, mensaje } = req.body;

  const errores = [];

  if (nombre.trim() === "") {
    errores.push({ mensaje: "El nombre esta vacio" });
  }

  if (correo.trim() === "") {
    errores.push({ mensaje: "El correo esta vacio" });
  }

  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El Mensaje esta vacio" });
  }

  if (errores.length > 0) {
    // Consultar testimoniales existentes
    const testimoniales = await Testimonial.findAll();
    // mostrar vista con errores
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
      testimoniales,
    });
    res.redirect("/testimoniales");
  } else {
    // Almacenar en la BD

    try {
      await Testimonial.create({
        nombre,
        correo,
        mensaje,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export { guardarTestimonial };
