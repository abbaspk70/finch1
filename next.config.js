/** @type {import('next').NextConfig} */
const webpack = require("webpack");

const nextConfig = {
   webpack: (config, {buildId, dev , isServer, deafaultLoaders, webpack}) =>
   {
    config.plugins.push(
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
        })
    );
    return config;
   },

    assetPrefix: ".",
    
   output: 'export',
};

module.exports = nextConfig

