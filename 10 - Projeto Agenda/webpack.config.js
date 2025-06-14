const path = require("path")
module.exports = {
    mode: "development",
    entry: "./frontend/index.js",
    output: {
        path: path.resolve(__dirname, "public", "assets", "js"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                type: "javascript/auto",
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }]
    },
    devtool: "source-map"
};
