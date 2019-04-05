const webpack = require('webpack')
const { isProduction } = require('./build/utils')

module.exports = {
    watch: false,
    mode: isProduction ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    fix: true,
                    cache: true,
                    formatter: require('eslint-friendly-formatter'),
                },
            },
        ],
    },
    plugins: [
    // 若不添加下面这行代码，webpack4中使用eslint会报错，因为eslint-loader中有段代码（`this.options.eslint`）会因options不存在而报错
        new webpack.LoaderOptionsPlugin({ options: {} }),
    ],
}
