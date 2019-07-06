const merge = require("webpack-merge");
const commonConfig = require("./config/webpack.common.js");
const productionConfig = require("./config/webpack.production.js");
const developmentConfig = require("./config/webpack.development.js");

module.exports = mode => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode });
  }
  return merge(commonConfig, developmentConfig, { mode });
};