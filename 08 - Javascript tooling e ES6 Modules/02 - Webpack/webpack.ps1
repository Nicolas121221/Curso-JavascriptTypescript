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
                    presets: ["@babel/preset-env"],
                    sourceType: "module"
                }
            }
        }]
    },
    devtool: "source-map"
};'

# Cria a pasta public a adiciona o arquivo assets
New-Item -Path . -Name "public" -ItemType "directory"
New-Item -Path .\public\assets -Name "js" -ItemType "directory"
New-Item -Path .\public -Name "assets" -ItemType "directory"

New-Item -Path .\public -Name "index.html" -ItemType "File"
Add-Content -Path .\public\index.html -Value '<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script src="./assets/js/bundle.js"></script>
</body>
</html>
'


# Cria a pasta src a adiciona o arquivo index.js
New-Item -Path . -Name "src" -ItemType "directory"
New-Item -Path .\src -Name "index.js" -ItemType "File"

# Configura o script para iniciar o webpack no package.json
$json = Get-Content package.json -Raw | ConvertFrom-Json
$json.scripts = @{ "dev" = "webpack --watch" }
$json | ConvertTo-Json -Depth 10 | Set-Content package.json

# Inicia o webpack
npm run carregaWebpack