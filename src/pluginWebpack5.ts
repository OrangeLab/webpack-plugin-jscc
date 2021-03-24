import anymatch from 'anymatch';
import {Compilation, Compiler} from 'webpack';
import {getPath} from './utils/index';

export interface JsccPluginOptions {
  exts?: Array<string>,
  values?: {
    [key:string]: any
  },
  excludes?: Array<RegExp>
}

export default class JsccPlugin {
  static NS = 'JsccPlugin'
  options = {
    // 默认会对以下文件类型进行条件编译
    exts: ['vue', 'js', 'ts', 'css', 'stylus', 'less', 'scss'],
    values: {
      _PLATFORM: 'web',
    },
    // 默认不对node_modules下的文件做处理
    excludes: [/node_modules/],
  }

  constructor(options:JsccPluginOptions) {
    this.options = Object.assign(this.options, options)
  }

  apply(compiler:Compiler) {
    compiler.hooks.thisCompilation.tap(
      JsccPlugin.NS,
      (compilation:Compilation) => {
        const excludesMatcher = this.options.excludes
        const includesMatcher = this.options.exts.map(
          ext => new RegExp(`\.${ext}$`)
        )
        compiler.webpack.NormalModule.getCompilationHooks(compilation).loader.tap(JsccPlugin.NS, (loaderContext:any,module:any) => {
          const userRequest = getPath(module.userRequest)
          if (!(typeof module.userRequest === 'string')) {
            return
          }        
          if (anymatch(excludesMatcher, userRequest)) {
            return
          }
          if (anymatch(includesMatcher, userRequest)) {
            module.loaders.push({
              options: {
                values: this.options.values,
              },
              loader: require.resolve(
                `./loader`
              ),
            })
          }
        })
      }
    )
  }
}

