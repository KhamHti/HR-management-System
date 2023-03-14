const {
  create,
  getAll,
  getOne,
  updateCountry,
  deleteCountry,
} = require("../model/countries.model");

module.exports = {
  createCountryId: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        res.json({
          message:
            err.message || "Some error occurred while creating the countries.",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getAll: (req, res) => {
    getAll((err, results) => {
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
    const id = req.params.id;
    getOne(id, (err, results) => {
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
      //   console.log(results);
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateCountry: (req, res) => {
    const data = req.body;
    updateCountry(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "Country updated successfully",
      });
    });
  },
  deleteCountry: (req, res) => {
    const body = req.body;
    deleteCountry(body, (err, results) => {
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
      return res.json({
        success: 1,
        message: "Country deleted successfully",
      });
    });
  },
};
