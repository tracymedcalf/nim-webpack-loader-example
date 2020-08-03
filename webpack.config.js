const path = require('path');

module.exports = {
    node: { fs: 'empty' },
    mode: 'development',
    entry: './src/index.js',
    devtool : 'inline-source-map',
    devServer : {
        disableHostCheck: true,
        contentBase : './dist',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.nim$/,
                use: [
                    {
                        loader: 'nim-loader',
                        options: {
                            flags: ['--outDir:src/nimcache']
                        },
                    }
                ],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.nim', '.js' ],
    },
};
