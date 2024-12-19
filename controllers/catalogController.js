// controllers/catalogController.js
const Vehicle = require("../models/Vehicle");

exports.showCatalog = (req, res) => {
  Vehicle.getAllVehicles((error, results) => {
    if (error) {
      console.error("Error retrieving vehicles:", error);
      return res.status(500).send("Error retrieving vehicles");
    }
    res.render("catalog", { vehicles: results });
  });
};
