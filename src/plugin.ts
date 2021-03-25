import webpack,{WebpackPluginInstance as Plugin} from 'webpack'
import {JsccPluginOptions} from './utils/type';
declare class JsccPlugin implements Plugin {
  static NS: string
  constructor(options?:JsccPluginOptions)
  apply(compiler: webpack.Compiler): void
}

let Plugin: typeof JsccPlugin
if (webpack.version && webpack.version[0] > '4') {
  // webpack5 and upper
  Plugin = require('./pluginWebpack5').default
} else {
  // webpack4 and lower
  Plugin = require('./pluginWebpack4').default
}

export default Plugin