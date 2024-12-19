const express = require("express");
const router = express.Router();

// Datos de ejemplo para el catálogo
const rzrVehicles = [
  { id: 5, name: "polaris crew pro xd", price: 1200, image: "/images/polaris.jpg", description: "RZR off road de 4 plazas" },
  { id: 6, name: "rzr polaris 1000 xr ", price: 1200, image: "/images/rzr1000.jpg", description: "RZR off road de 4 plazas y buena potencia" }
];

const cuatrimotosVehicles = [
  { id: 2, name: "Italika atv200", price: 500, image: "/images/atv200.jpg", description: "Cuatrimoto italica de 200cc, grande" },
  { id: 1, name: "Italika atv180", price: 500, image: "/images/atv180.jpg", description: "Cuatrimoto italica de 180cc, mediana" },
  { id: 3, name: "Italika atv180 c", price: 500, image: "/images/atv180c.jpg", description: "Cuatrimoto italica de 180cc, mediana" },
  { id: 4, name: "Italika atv150", price: 500, image: "/images/atv150.jpg", description: "Cuatrimoto italica de 150cc, chica" }
];

// Ruta para mostrar el catálogo
router.get("/", (req, res) => {
  res.render("catalog", { rzrVehicles, cuatrimotosVehicles });
});

module.exports = router;
