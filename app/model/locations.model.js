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
  getLocationByLocationId: (location_id, callBack) => {
    db.query(
      `SELECT * FROM LOCATIONS WHERE location_id=?`,
      [location_id],
      (err, results) => {
        if (err) {
          console.log(err);
          callBack(err);
        }
        return callBack(null, results);
      }
    );
  },
  updatLocation: (data, callBack) => {
    db.query(
      `UPDATE LOCATIONS SET street_address=?, postal_code=?, city=?, state=?, country_id=? WHERE location_id=?`,
      [
        data.street_address,
        data.postal_code,
        data.city,
        data.state,
        data.country_id,
        data.location_id,
      ],
      (err, results) => {
        if (err) {
          console.log(err);
          return callBack(err);
        }
        // console.log(results);
        return callBack(null, results);
      }
    );
  },
  deleteLocation: (data, callBack) => {
    db.query(
      `DELETE FROM LOCATIONS WHERE location_id=?`,
      [data.location_id],
      (err, results) => {
        if (err) {
          console.log(err);
          return callBack(err);
        }
        return callBack(null, results);
      }
    );
  },
};
