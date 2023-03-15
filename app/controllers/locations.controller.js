const { createLocation, getAllLocation } = require("../model/locations.model");

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
};
