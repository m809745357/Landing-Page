var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var PurifyCSSPlugin = require('purifycss-webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var inProduction = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, 'src/main.js'),
            path.resolve(__dirname, 'src/main.scss')
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract(
                    {
                        use: ['css-loader', 'sass-loader'],
                        fallback: 'style-loader'
                    }
                )
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/,
                use: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        },
                    },

                    'img-loader'
                ]
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false,
        }),

        new ExtractTextPlugin('[name].css'),

        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'index.html')),
            minimize: inProduction
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: inProduction
        }),

        function () {
            this.plugin('done', stats => {
                require('fs').writeFileSync(
                    path.join(__dirname, 'dist/manifest.json'),
                    JSON.stringify(stats.toJson())
                )
            })
        }

    ]
}

if (inProduction) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    )
}
