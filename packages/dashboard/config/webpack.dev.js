const { merge } = require('webpack-merge');

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJSON = require("../package.json");

const devConfig = {
    mode: 'development',
    output: {
        publicPath: "http://localhost:8083/"
    },
    devServer: {
        port: 8083,
        historyApiFallback:  {
            index: '/index.html'
        },
        headers: {
            'Access-control-allow-origin': '*'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'dashboard',
            filename: "remoteEntry.js",
            exposes: {
                "./DashboardApp": "./src/bootstrap.js"
            },
            shared: [
                packageJSON.dependencies
            ]
        })
    ]
}

module.exports = merge(commonConfig, devConfig);