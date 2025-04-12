const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductsTest,
} = require("../controllers/product"); ////It’s just a cleaner way to define multiple methods (like .get, .post, .put, .delete, etc.) on the same path.);
router.route("/").get(getAllProducts);
router.route("/test").get(getAllProductsTest);

module.exports = router;
