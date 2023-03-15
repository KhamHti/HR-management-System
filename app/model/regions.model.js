const db = require("../../config/db");

module.exports = {
  create: (data, callBack) => {
    db.query(
      `INSERT INTO REGIONS (region_id, region_name) VALUES (?,?)`,
      [data.region_id, data.region_name],
      (err, results) => {
        if (err) {
          console.log(err);
          return callBack(err);
        }
        return callBack(null, results);
      }
    );
  },
  getAllRegionId: (callBack) => {
    db.query(`SELECT * FROM REGIONS`, [], (err, results) => {
      if (err) {
        console.log(err);
        return callBack(err);
      }
      return callBack(null, results);
    });
  },
  getRegionByRegionID: (region_id, callBack) => {
    db.query(
      `SELECT region_id, region_name FROM REGIONS WHERE region_id = ?`,
      [region_id],
      (err, results) => {
        if (err) {
          console.log(err);
          return callBack(err);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  },

  updateRegion: (data, callBack) => {
    db.query(
      `UPDATE REGIONS SET region_name=? WHERE region_id = ? `,
      [data.region_name, data.region_id],
      (err, results) => {
        if (err) {
          callBack(err);
        }
        callBack(null, results);
      }
    );
  },
  deleteRegion: (data, callBack) => {
    db.query(
      `DELETE FROM REGIONS WHERE region_id = ?`,
      [data.region_id],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
