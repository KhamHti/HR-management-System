const db = require("../../config/db");

module.exports = {
  create: (data, callBack) => {
    db.query(
      `INSERT INTO COUNTRIES (country_id, CountryName, region_id) VALUES (?,?,?)`,
      [data.country_id, data.CountryName, data.region_id],
      (err, results) => {
        if (err) {
          console.log(err);
          return callBack(err);
        }
        return callBack(null, results);
      }
    );
  },

  getAll: (callBack) => {
    db.query(`SELECT * FROM COUNTRIES`, [], (err, results) => {
      if (err) {
        console.log(err);
        return callBack(err);
      }
      return callBack(null, results);
    });
  },

  getOne: (country_id, callBack) => {
    db.query(
      `SELECT country_id, CountryName, region_id FROM COUNTRIES WHERE country_id = ?`,
      [country_id],
      (err, results) => {
        if (err) {
          console.log(err);
          return callBack(err);
        }
        return callBack(null, results);
      }
    );
  },

  updateCountry: (data, callBack) => {
    db.query(
      `UPDATE COUNTRIES SET CountryName=? WHERE country_id = ? `,
      [data.CountryName, data.country_id],
      (err, results) => {
        if (err) {
          callBack(err);
        }
        callBack(null, results);
      }
    );
  },

  deleteCountry: (data, callBack) => {
    db.query(
      `DELETE FROM COUNTRIES WHERE country_id = ?`,
      [data.country_id],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
