const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin')
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin')
const CopyPlugin = require('copy-webpack-plugin')
const siteDataConfig = require('../src/site.data.config')

const { getVersionDate, join } = require('./utils')

const versionDate = getVersionDate()

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = './'

// style files regexes
const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const sassRegex = [/\.sass$/, /\.scss$/]
// 为了兼容旧代码，将.scss文件也当做模块化的样式了，其实不建议用.scss文件来做模块化，这样想直接写非模块化的.scss就比较麻烦了，需要用上面定义的.normal.scss作为后缀
const sassModuleRegex = [/\.(module\.(scss|sass))$/, /\.scss$/]

// common function to get style loaders
const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
        require.resolve('style-loader'),
        {
            loader: require.resolve('css-loader'),
            options: cssOptions,
        },
        {
            // Options for PostCSS as we reference these options twice
            // Adds vendor prefixing based on your specified browser support in
            // package.json
            loader: require.resolve('postcss-loader'),
            options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebook/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    require('postcss-preset-env')({
                        autoprefixer: {
                            flexbox: 'no-2009',
                        },
                        stage: 3,
                    }),
                ],
            },
        },
    ]
    if (preProcessor) {
        loaders.push(require.resolve(preProcessor))
    }
    return loaders
}

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: [
        require.resolve('react-dev-utils/webpackHotDevClient'),
        join('/src/js/app.js'),
    ],
    output: {
        // Tells webpack to include comments in bundles with information about the contained modules. This option defaults to true in development and false in production mode respectively.
        pathinfo: true,
        path: join('/'),
        // This does not produce a real file. It's just the virtual path that is
        // served by WebpackDevServer in development. This is the JS bundle
        // containing code from all our entry points, and the Webpack runtime.
        filename: '[name].js',
        // This is the URL that app is served from. We use "/" in development.
        publicPath: '/',
        // Point sourcemap entries to original disk location (format as URL on Windows)
        devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    },
    optimization: {
        // Automatically split vendor and commons
        // https://twitter.com/wSokra/status/969633336732905474
        // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
        splitChunks: {
            chunks: 'all',
            name: false,
        },
        // Keep the runtime chunk seperated to enable long term caching
        // https://twitter.com/wSokra/status/969679223278505985
        runtimeChunk: true,
    },
    resolve: {
        symlinks: false,
        modules: [
            'node_modules',
            join('/node_modules'),
        ],
        // webpack4里，如果js文件以.mjs为后缀，wepack就不用再去判断这个文件是es6 module还是commonjs模块了，速度会快一些
        extensions: ['.js', '.jsx', '.mjs', '.sass', '.scss', '.css', '.ejs'],
        // 虽然定义了这些路径别名，但是并不建议使用，虽然书写时是方便了一些，但是阅读代码的时候会无法跳转到对应的定义处
        alias: {
            '@': join('/src'),
        },
        plugins: [
            new ModuleScopePlugin(join('/src'), [join('/package.json')]),
        ],
    },
    resolveLoader: {
        modules: [
            join('/node_modules'),
        ],
    },
    module: {
        // makes missing exports an error instead of warning
        strictExportPresence: true,
        rules: [
            {
                parser: {
                    // do not disable require.ensure as it's not a standard language feature.
                    requireEnsure: true,
                },
            },
            // First, run the linter.
            // It's important to do this before Babel processes the JS.
            // 暂时不处理.js后缀的文件
            {
                test: /\.(js|mjs|jsx)$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            formatter: require.resolve('react-dev-utils/eslintFormatter'),
                            eslintPath: require.resolve('eslint'),
                            // 开启eslint自动修复功能
                            // 官方指出该功能会修改源文件=>存在一定风险，所以我们只应用于新的.jsx或.mjs后缀的文件
                            // 如果本地开发有问题则需要关闭该功能
                            // 如果本地开发和测试测了都没问题那就视为没问题
                            // 不开这个功能在团队里推eslint比较麻烦
                            // 开eslint除了减少一些简单的bug，还可以避免不同分支源码比对时一大堆内容一样格式/空格等不一样导致的diff
                            fix: false,
                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
                include: join('/src'),
            },
            {
                // "oneOf" will traverse all following loaders until one will
                // match the requirements. When no loader matches it will fall
                // back to the "file" loader at the end of the loader list.
                // 比如说：前面的loader没有处理过图片文件，所以最后会由file-loader来处理图片文件
                oneOf: [
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'images/[name].[ext]',
                        },
                    },
                    // Process application JS with Babel.
                    // The preset includes JSX, Flow, and some ESnext features.
                    {
                        test: /\.(js|mjs|jsx)$/,
                        include: join('/src'),
                        loader: require.resolve('babel-loader'),
                        options: {
                            customize: require.resolve(
                                'babel-preset-react-app/webpack-overrides'
                            ),
                            plugins: [
                                [
                                    require.resolve('babel-plugin-named-asset-import'),
                                    {
                                        loaderMap: {
                                            svg: {
                                                ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                                            },
                                        },
                                    },
                                ],
                            ],
                            // This is a feature of `babel-loader` for webpack (not Babel itself).
                            // It enables caching results in ./node_modules/.cache/babel-loader/
                            // directory for faster rebuilds.
                            cacheDirectory: true,
                            // Don't waste time on Gzipping the cache
                            cacheCompression: false,
                            presets: ['react-app'],
                        },
                    },
                    // Process any JS outside of the app with Babel.
                    // Unlike the application JS, we only compile the standard ES features.
                    {
                        test: /\.(js|mjs)$/,
                        exclude: /@babel(?:\/|\\{1,2})runtime/,
                        loader: require.resolve('babel-loader'),
                        options: {
                            babelrc: false,
                            configFile: false,
                            compact: false,
                            presets: [
                                [
                                    require.resolve('babel-preset-react-app/dependencies'),
                                    { helpers: true },
                                ],
                            ],
                            cacheDirectory: true,
                            // Don't waste time on Gzipping the cache
                            cacheCompression: false,
                            // If an error happens in a package, it's possible to be
                            // because it was compiled. Thus, we don't want the browser
                            // debugger to show the original code. Instead, the code
                            // being evaluated would be much more helpful.
                            sourceMaps: false,
                        },
                    },
                    // "postcss" loader applies autoprefixer to our CSS.
                    // "css" loader resolves paths in CSS and adds assets as dependencies.
                    // "style" loader turns CSS into JS modules that inject <style> tags.
                    // In production, we use a plugin to extract that CSS to a file, but
                    // in development "style" loader enables hot editing of CSS.
                    // By default we support CSS Modules with the extension .module.css
                    {
                        test: cssRegex,
                        exclude: cssModuleRegex,
                        include: join('/src'),
                        use: getStyleLoaders({
                            // importLoaders：在css-loader前应用的loader的数量，默认为0
                            importLoaders: 1,
                        }),
                    },
                    // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
                    // using the extension .module.css
                    {
                        test: cssModuleRegex,
                        include: join('/src'),
                        use: getStyleLoaders({
                            importLoaders: 1,
                            // 启用CSS模块
                            modules: true,
                            getLocalIdent: getCSSModuleLocalIdent,
                        }),
                    },
                    // Opt-in support for SASS (using .scss or .sass extensions).
                    // Chains the sass-loader with the css-loader and the style-loader
                    // to immediately apply all styles to the DOM.
                    // By default we support SASS Modules with the
                    // extensions .module.scss or .module.sass
                    {
                        test: sassRegex,
                        exclude: sassModuleRegex,
                        include: join('/src'),
                        use: getStyleLoaders({ importLoaders: 2 }, 'sass-loader'),
                    },
                    // Adds support for CSS Modules, but using SASS
                    // using the extension .module.scss or .module.sass
                    {
                        test: sassModuleRegex,
                        include: join('/src'),
                        use: getStyleLoaders(
                            {
                                importLoaders: 2,
                                modules: true,
                                getLocalIdent: getCSSModuleLocalIdent,
                            },
                            'sass-loader'
                        ),
                    },
                    // {
                    //     test: require.resolve('zepto'),
                    //     include: join('/src'),
                    //     loader: [
                    //         // exports-loader：将传入的 window.Zepto 以 module.exports = window.Zepto 的形式向外暴露接口，使这个模块符合 CommonJS 规范，支持 import
                    //         'exports-loader?window.Zepto',
                    //         // script-loader：用 eval 的方法将 zepto 在引入的时候执行了一遍，此时 zepto 库已存在于 window.Zepto
                    //         'script-loader'
                    //     ]
                    // },
                    // 注意：如果要添加新的loader，请加到file-loader之前
                    // "file" loader makes sure those assets get served by WebpackDevServer.
                    // When you `import` an asset, you get its (virtual) filename.
                    // In production, they would get copied to the `build` folder.
                    // This loader doesn't use a "test" so it will catch all modules
                    // that fall through the other loaders.
                    {
                        // Exclude `js` files to keep "css" loader working as it injects
                        // its runtime that would otherwise be processed through "file" loader.
                        // Also exclude `html` and `json` extensions so they get processed
                        // by webpacks internal loaders.
                        exclude: [/\.(js|mjs|jsx)$/, /\.html$/, /\.json$/],
                        include: join('/src'),
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'static/[name].[ext]',
                        },
                    },
                    // 注意：如果要添加新的loader，请加到file-loader之前
                ],
            },
        ],
    },
    plugins: [
        new CopyPlugin([
            {
                from: 'src/static',
                to: 'static',
            },
        ]),
        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            inject: true,
            template: join('/src/index.html'),
            title: siteDataConfig.head.title,
            meta: {
                description: siteDataConfig.head.description,
                keywords: siteDataConfig.head.keywords.join(','),
                author: siteDataConfig.head.author,
            },
            head: siteDataConfig.head,
        }),
        // Makes some environment variables available in index.html.
        // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
        // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
        // In development, this will be an empty string.
        new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
            title: 'Title',
            versionDate,
        }),
        // This gives some necessary context to module not found errors, such as
        // the requesting resource.
        new ModuleNotFoundPlugin(join('/')),
        // Makes some environment variables available to the JS code, for example:
        // if (process.env.NODE_ENV === "'development'") { ... }. See `./env.js`.
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
        }),
        // This is necessary to emit hot updates (currently CSS only):
        new webpack.HotModuleReplacementPlugin(),
        // Watcher doesn't work well if you mistype casing in a path so we use
        // a plugin that prints an error when you attempt to do this.
        // See https://github.com/facebook/create-react-app/issues/240
        new CaseSensitivePathsPlugin(),
        // If you require a missing module and then `npm install` it, you still have
        // to restart the development server for Webpack to discover it. This plugin
        // makes the discovery automatic so you don't have to restart.
        // See https://github.com/facebook/create-react-app/issues/186
        new WatchMissingNodeModulesPlugin(join('/src/node_modules')),
        // Generate a manifest file which contains a mapping of all asset filenames
        // to their corresponding output file so that tools can pick it up without
        // having to parse `index.html`.
        new ManifestPlugin({
            fileName: 'asset-manifest.json',
            publicPath: publicPath,
        }),
    ].filter(Boolean),
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
    // Turn off performance processing because we utilize
    // our own hints via the FileSizeReporter
    performance: false,
}
