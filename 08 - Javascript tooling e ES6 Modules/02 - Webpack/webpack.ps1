# inicia o package.json
npm init -y

# instala as dependencias
npm i --save-dev @babel/preset-env @babel/core @babel/cli babel-loader webpack webpack-cli
npm i core.js regenerator-runtime

# cria o arquivo webpack.config.js e adiciona o conteúdo nele
New-Item -Path . -Name "webpack.config.js" -ItemType "File"
Add-Content -Path .\webpack.config.js -Value 'const path = require("path")
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public", "assets", "js"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env"]
                }
            }
        }]
    },
    devtool: "source-map"
};'

# Cria a pasta public a adiciona o arquivo assets
New-Item -Path . -Name "public" -ItemType "directory"
New-Item -Path .\public -Name "assets" -ItemType "directory"
New-Item -Path .\public\assets -Name "js" -ItemType "directory"

# Cria a pasta src a adiciona o arquivo index.js
New-Item -Path . -Name "src" -ItemType "directory"
New-Item -Path .\src -Name "index.js" -ItemType "File"

# Configura o script para iniciar o webpack no package.json
$json = Get-Content package.json -Raw | ConvertFrom-Json
$json.scripts = @{ "carregaWebpack" = "webpack --watch" }
$json | ConvertTo-Json -Depth 10 | Set-Content package.json

# Inicia o webpack
npm run carregaWebpack