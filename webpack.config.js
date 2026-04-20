const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';

    return {
        entry: './src/app/index.jsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProd ? '[name].[contenthash:8].js' : 'bundle.js',
            chunkFilename: isProd ? '[name].[contenthash:8].js' : '[name].js',
            clean: true,
            publicPath: '/',
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    type: 'javascript/auto',
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            sourceType: 'module',
                            presets: [
                                ['@babel/preset-env', { targets: 'defaults' }],
                                ['@babel/preset-react', { runtime: 'automatic' }],
                            ],
                        },
                    },
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                favicon: './public/favicon.ico',
            }),
            new CopyWebpackPlugin({
                patterns: [{ from: 'public/robots.txt', to: '.' }],
            }),
            ...(isProd
                ? [
                      new MiniCssExtractPlugin({
                          filename: '[name].[contenthash:8].css',
                          chunkFilename: '[id].[contenthash:8].css',
                      }),
                  ]
                : []),
        ],
        ...(isProd
            ? {
                  optimization: {
                      minimizer: ['...', new CssMinimizerPlugin()],
                  },
              }
            : {}),
        devServer: {
            port: 3000,
            historyApiFallback: true,
            hot: true,
        },
    };
};
