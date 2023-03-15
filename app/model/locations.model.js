const db = require("../../config/db");

module.exports = {
  createLocation: (data, callBack) => {
    db.query(
      `INSERT INTO LOCATIONS (location_id, street_address, postal_code, city, state, country_id) VALUES (?,?,?,?,?,?)`,
      [
        data.location_id,
        data.street_address,
        data.postal_code,
        data.city,
        data.state,
        data.country_id,
      ],
      (err, results) => {
        if (err) {
          console.log(err);
          return callBack(err);
        }
        return callBack(null, results);
      }
    );
  },
  getAllLocation: (callBack) => {
    db.query(`SELECT * FROM LOCATIONS`, [], (err, results) => {
      if (err) {
        console.log(err);
        callBack(err);
      }
      return callBack(null, results);
    });
  },
};
