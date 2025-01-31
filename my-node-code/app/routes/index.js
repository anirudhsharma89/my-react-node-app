const router = require("express").Router();
const ProductController = require("../controller/productsController");
const IndexController = require("../controller/IndexController");

router.get("/", IndexController);
router.get("/products", ProductController);

module.exports = router;
