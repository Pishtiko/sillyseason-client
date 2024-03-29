var sliceArgs = Function.prototype.call.bind(Array.prototype.slice);
var toString  = Function.prototype.call.bind(Object.prototype.toString);
var path = require('path');
var webpack = require('webpack');
// Webpack Plugins
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  devtool: 'source-map',
  // devtool: 'eval',

  //
  entry: {
    'vendor': [
      // Polyfills
      'es6-shim',
      'es6-promise',
      'reflect-metadata',
      // 'zone.js/dist/zone-microtask',
      'zone.js/dist/long-stack-trace-zone',
      // Angular2
      'angular2/platform/browser',
      'angular2/platform/common_dom',
      'angular2/core',
      'angular2/router',
      'angular2/http',
      // RxJS
      'rxjs',
      // Other
      'angular2-jwt'
    ],
    'app': [
      './src/index'
    ]
  },

  // Config for our build files
  output: {
    path: root('build'),
    filename: '[name].js',
    // filename: '[name].[hash].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
    // publicPath: 'http://mycdn.com/'
  },

  resolve: {
    root: __dirname,
    extensions: [
      '',
      '.ts',
      '.js',
      '.json',
      '.css',
      '.html'
    ]
  },

  module: {
    preLoaders: [ { test: /\.ts$/, loader: 'tslint-loader' } ],
    loaders: [
      // Support for .ts files.
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        query: {
          'ignoreDiagnostics': [
            2403, // 2403 -> Subsequent variable declarations
            2300, // 2300 Duplicate identifier
            2374, // 2374 -> Duplicate number index signature
            2375  // 2375 -> Duplicate string index signature
          ]
        },
        exclude: [ /\.spec\.ts$/, /\.e2e\.ts$/, /node_modules/ ]
      },

      // Support for *.json files.
      { test: /\.json$/,  loader: 'json-loader' },

      // Support for CSS as raw text
      { test: /\.css$/,   loader: 'raw-loader' },

      // support for .html as raw text
      { test: /\.html$/,  loader: 'raw-loader' },
    ],
    noParse: [
     /zone\.js\/dist\/.+/,
     /reflect-metadata/,
     /es(6|7)-.+/,
     // /.zone-microtask/, 
     /.long-stack-trace-zone/
    ]
  },

  plugins: [
    new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js', minChunks: Infinity }),
    new CommonsChunkPlugin({ name: 'common', filename: 'common.js', minChunks: 2, chunks: ['app', 'vendor'] })
  ],
  
  // Other module loader config
  tslint: {
    emitErrors: false,
    failOnHint: false
  },
  
  // our Development Server configs
  // our Webpack Development Server config
  devServer: {
    historyApiFallback: true,
    publicPath: '/build'
  }
};

function getBanner() {
  return 'This is the Angular 2 client for Silly Season Fantasy League';
}

function root(args) {
  args = sliceArgs(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
function rootNode(args) {
  args = sliceArgs(arguments, 0);
  return root.apply(path, ['node_modules'].concat(args));
}

