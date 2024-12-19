const express = require("express");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const catalogoRutas = require("./routes/catalog");
const routesRoutes = require("./routes/routes");

require("dotenv").config();
require("./config/db");

const app = express();

// Middleware para manejar archivos estáticos
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));

// Configuración de la sesión
app.use(
  session({
    secret: process.env.SESSION_SECRET || "miClaveSecreta123",
    resave: false,
    saveUninitialized: true,
  })
);

// Middleware para utilizar flash (mensajes temporales)
app.use(flash());

// Middleware para hacer disponible el usuario en todas las vistas
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  res.locals.error = req.flash('error'); // Pasar el mensaje de error al frontend
  next();
});

// Middleware para parsear el body del formulario
app.use(express.urlencoded({ extended: true }));

// Configurar el motor de vistas
app.set("view engine", "ejs");

// Variable temporal para almacenar comentarios
const comentarios = [];

// Ruta principal (index)
app.get("/", (req, res) => {
  const error = req.flash('error'); // Recibe el mensaje de error de flash
  res.render("index", { comentarios, error });
});

// Ruta POST para recibir nuevos comentarios
app.post("/comentarios", (req, res) => {
  const { nombre, comentario } = req.body; // Recibe nombre y comentario desde el formulario
  if (nombre && comentario) {
    comentarios.push({ nombre, texto: comentario }); // Almacenar nombre y comentario
  } else {
    req.flash('error', 'Por favor completa todos los campos del comentario.');
  }
  res.redirect("/"); // Redirigir a la página principal
});

// Rutas para el catálogo
app.use("/catalogo", catalogoRutas);

// Rutas adicionales (ejemplo: rutas de vehículos)
app.use("/routes", routesRoutes);

// Inicialización del servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Servidor en http://127.0.0.1:" + port);
});
