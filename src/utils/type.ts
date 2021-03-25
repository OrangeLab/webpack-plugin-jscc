export interface JsccPluginOptions {
  exts?: Array<string>,
  values?: {
    [key:string]: any
  },
  excludes?: Array<RegExp>
}