var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        "webpack-dev-server/client?http://localhost:3000", // WebpackDevServer host and port
        "webpack/hot/only-dev-server",
        "./app/App.js"
    ],
    output: {
        path: __dirname + '/app/',
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    plugins: [
        // allows instantaneous live refresh without losing state
        // while editing React components.
        new webpack.HotModuleReplacementPlugin(),
        // webpack.NoErrorsPlugin is an optional plugin that tells the
        // reloader to not reload if there is a syntax error in your code.
        // The error is simply printed in the console, and the component
        // will reload when you fix the error.
        new webpack.NoErrorsPlugin()
    ],
    // To enable requiring files without specifying the extension, add them here
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/ },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(png|jpg)$/, loader: 'url-loader',
                query: { limit: "8192", mimetype: "image/png" } }// inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    }
};