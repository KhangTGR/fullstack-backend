const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/productController.js");
// const { authMiddleWare } = require("../middlewares/customer/authMiddleware.js");

router.post("/create", ProductController.createProduct);
// router.put("/update/:id", authMiddleWare, ProductController.updateProduct);
router.get("/get-details/:id", ProductController.getDetailsProduct);
// router.delete("/delete/:id", authMiddleWare, ProductController.deleteProduct);
router.get("/get-all", ProductController.getAllProduct);
// router.post("/delete-many", authMiddleWare, ProductController.deleteMany);
router.get("/get-all-type", ProductController.getAllType);

module.exports = router;
