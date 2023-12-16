const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack App",
            filename: "index.html",
            template: 'src/template.html',
        })
    ]
}