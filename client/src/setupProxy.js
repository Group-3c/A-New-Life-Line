const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy("/api/*", { target: "https://a-new-life-line-server.herokuapp.com/" }));
};