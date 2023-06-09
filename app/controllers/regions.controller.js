const {
  create,
  getAllRegionId,
  getRegionByRegionID,
  updateRegion,
  deleteRegion,
} = require("../model/regions.model");

module.exports = {
  createRegionId: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        res.json({
          message:
            err.message || "Some error occurred while creating the RegionId.",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  getAll: (req, res) => {
    getAllRegionId((err, results) => {
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

  getOne: (req, res) => {
    const region_id = req.params.region_id;
    getRegionByRegionID(region_id, (err, results) => {
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

  update: (req, res) => {
    const body = req.body;
    updateRegion(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "Region update successfully",
      });
    });
  },

  deleteRegion: (req, res) => {
    const body = req.body;
    deleteRegion(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      if (results) {
        return res.json({
          success: 1,
          message: "Region deleted successfully",
        });
      }
    });
  },
};
