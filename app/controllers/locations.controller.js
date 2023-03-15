const {
  createLocation,
  getAllLocation,
  getLocationByLocationId,
  updatLocation,
} = require("../model/locations.model");

module.exports = {
  createLocation: (req, res) => {
    const body = req.body;
    createLocation(body, (err, results) => {
      if (err) {
        console.log(err);
        res.json({
          message:
            err.message || "Some error occurred while creating locations.",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getAllLocation: (req, res) => {
    getAllLocation((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getLocationByLocationId: (req, res) => {
    const location_id = req.params.location_id;
    getLocationByLocationId(location_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results[0]) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updatLocation: (req, res) => {
    const data = req.body;
    updatLocation(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Content must not be empty",
        });
      }
      return res.json({
        success: 1,
        message: "Update location successfully",
      });
    });
  },
};
