const Route = require("../models/route");

// Obtener todas las rutas
exports.getRoutes = async (req, res) => {
    try {
        const routes = await Route.find();
        res.render("routes", { routes });
    } catch (err) {
        res.status(500).send("Error al obtener las rutas");
    }
};

// Agregar una nueva ruta (opcional)
exports.addRoute = async (req, res) => {
    try {
        const { name, description, image } = req.body;
        const newRoute = new Route({ name, description, image });
        await newRoute.save();
        res.redirect("/routes");
    } catch (err) {
        res.status(500).send("Error al agregar la ruta");
    }
};
