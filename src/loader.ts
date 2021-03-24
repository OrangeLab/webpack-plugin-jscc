import jscc from 'jscc';
import loaderUtils from 'loader-utils'

interface JsccOptions{
  [k:string]:any
}

export default function(source: string, inputSourceMap:any) {
  console.log('JSCC Source Start =====================')
  console.log("source:", source)
  console.log('JSCC Source End =====================')
  const options: JsccOptions = loaderUtils.getOptions(this) || {
    values: {},
  }

  const out = jscc(source, this.resourcePath, {
    values: options.values,
  })
  this.callback(null, out.code, out.map)
}