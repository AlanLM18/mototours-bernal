const db = require("../config/db");

class Vehicle {
  static getAllVehicles(callback) {
    const query = "SELECT * FROM vehicles";
    db.query(query, callback);
  }

  static getAvailableVehicles(date, callback) {
    const query = `SELECT * FROM vehicles WHERE id NOT IN (
                   SELECT vehicle_id FROM reservations 
                   WHERE date = ?)`;
    db.query(query, [date], callback);
  }
}

module.exports = Vehicle;