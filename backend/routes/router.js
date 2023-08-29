const UserRouter = require("./customer/userRoutes.js");
const ProductRouter = require("./customer/productRoutes.js");
const OrderRouter = require("./customer/orderRoutes.js");

const routes = (app) => {
  app.use("/api/customer/user", UserRouter);
  app.use("/api/customer/product", ProductRouter);
  app.use("/api/customer/order", OrderRouter);
};

module.exports = routes;
