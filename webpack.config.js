'use strict'

const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

const tasksPath = path.resolve('./tasks')
const tasksDirectories = fs.readdirSync(tasksPath).filter( (dir) => ( fs.lstatSync(path.join(tasksPath, dir)).isDirectory() ) )

const entry = tasksDirectories.reduce( (entries, dir) => {
  entries[dir] = path.join(tasksPath, dir, 'task.jsx')
  return entries
}, {})

const output = {
  path: path.join(__dirname, '/dist'),
  filename: '[name]/index.js',
  chunkFilename: '[name]/[id].chunk.js',
  publicPath: '/'
}



/**
 *    Loaders
 */

const loaders = [
  { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
  { test: /\.css$/, loader: 'style!css-loader' }
]



/**
 *    Plugins
 */

// dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


// task html files
const taskHtmlPlugins = tasksDirectories.map( (dir, key) => (
  new HtmlWebpackPlugin({
    title: dir.replace(/-/g, ' ').replace(/^0+/, '').replace(/^([0-9]+)+/, 'Task $1 - '),
    previous: tasksDirectories[key-1],
    next: tasksDirectories[key+1],
    filename: '/' + dir + '/index.html',
    template: path.join(tasksPath, 'task.ejs'),
    chunks: [dir]
  })
))

// combine to a single array
const plugins = [
  // root html file
  new HtmlWebpackPlugin({
    filename: 'index.html',
    tasks: tasksDirectories,
    template: path.join(tasksPath, 'index.ejs'),
    inject: false
  }),
  // static assets e.g. images
  new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }]),

].concat(taskHtmlPlugins)



/**
 *    Build config object
 */
module.exports = {
  entry,
  output,
  module: { loaders },
  plugins,
  devtool: 'cheap-module-source-map',
  devServer: {
    stats: 'errors-only'
  },
  recordsPath: path.resolve('/tmp/webpack.json')
}
