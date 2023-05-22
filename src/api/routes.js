let userRouter = require('./user/routes.js');
let contactRouter = require('./contact/routes.js');

module.exports = (app) => {
  app.get("/api", (req, res) => {res.json({ message: "Welcome to ben's application!" })});
  app.use("/api", userRouter);
  app.use("/api", contactRouter);
}

