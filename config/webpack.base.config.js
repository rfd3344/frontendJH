const path = require('path');
const tsConfig = require('../tsconfig.json');

// webpack config for entry
const entry = {
  main: path.resolve(__dirname, '../src/index.tsx'),
};

// webpack config for output
const output = {
  // the target directory for all output files
  path: path.resolve(__dirname, '../public/'),
  filename: './dist/[name].bundle.js',

  publicPath: '/',
};

// webpack config for module
const moduleConfig = {
  rules: [
    {
      test: /\.tsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [
        { loader: 'ts-loader' },
        // {
        // 	loader: 'babel-loader',
        // 	options: {
        // 		presets: ['@babel/preset-env', '@babel/preset-react'],
        // 		plugins: ['@babel/plugin-transform-runtime'],
        // 	},
        // },
      ],
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
        // closed eslint check, reduce info generate in Terminal
        // { loader: 'eslint-loader' },
      ],
    },
    {
      test: /\.(less|css)$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
      ],
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [{ loader: 'file-loader' }],
    },
  ],
};

function resolveTsconfigPathsToAlias() {
  const { paths } = tsConfig.compilerOptions;
  const processPath = (dirs) => dirs[0].replace('/*', '').replace('*', '');

  const aliases = Object.keys(paths).reduce((acc, key) => {
    const aliasKey = key.replace('/*', '');
    const value = path.resolve(__dirname, `../${processPath(paths[key])}`);
    acc[aliasKey] = value;
    return acc;
  }, {});
  return aliases;
}

const resolveConfig = {
  // alias define directory with alias name. usage:
  // '@': path.resolve(__dirname, '../src/'),
  alias: resolveTsconfigPathsToAlias(),
  // add file extension in following sequence
  extensions: ['.tsx', '.ts', '.jsx', '.js'],
};




const performanceConfig = {
  hints: 'warning',
  maxEntrypointSize: 4000000,
  maxAssetSize: 4000000,
};

const pluginsConfig = [
  // new webpack.NamedModulesPlugin(),
];


module.exports = {
  entry,
  output,
  module: moduleConfig,
  resolve: resolveConfig,
  performance: performanceConfig,
  plugins: pluginsConfig,
};
