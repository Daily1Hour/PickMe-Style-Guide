const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");

module.exports = (webpackConfigEnv) => {
    const defaultConfig = singleSpaDefaults({
        orgName: "pickme",
        projectName: "style-guide",
        webpackConfigEnv,
    });

    return merge(defaultConfig, {
        // modify the webpack config however you'd like to by adding to this object
    });
};
