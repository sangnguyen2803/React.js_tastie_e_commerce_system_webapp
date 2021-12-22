const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v1/api/auth", {
      target: "http://localhost:3009/",
    })
  );
  app.use(
    createProxyMiddleware("/v1/api/provider", {
      target: "http://localhost:3008/",
    })
  );
};
