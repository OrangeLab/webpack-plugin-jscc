# Webpack Plugin For Jscc
## 简介
`webpack-plugin-jscc`是支持代码级的条件编译能力一个插件


## 使用

### 安装

> yarn add webpack-plugin-jscc

### 常规使用

> import JsccPlugin from 'webpack-plugin-jscc'

JsccPlugin的参数说明

| 参数      | 类型 |    说明 | 默认值  |
| :-------- | ---- | --------:| ---- |
| exts  | `Array<string>` |  需要解析的文件   | `['vue', 'js', 'ts', 'css', 'stylus', 'less', 'scss']` |
| values     | Object |注入的业务环境标识 |  `{_PLATFORM: 'web'}`  |
| excludes      | `Array<string>`  |不做处理的文件 | `[/node_modules/] ` |

> 

```
plugins: [
  new JsccPlugin({
    values: {
        _PLATFORM: 'xxx', // 匹配业务环境标识
    }
  })
]
```


## 条件编译业务书写规则

js:
```
//#if _PLATFORM==='kflower'
console.info('【App.vue】 in kflower branch logic')
//#else
console.info('【App.vue】 in other branch logic')
//#endif
```

vue:
```
<!--#if _PLATFORM==='kflower'  //-->
<HelloWorld msg="Welcome to kflower!"/>
<!--#endif //-->
```


css:
```
/*#if _PLATFORM==='kflower' //*/ 
.kflower {
    height: 10px
  }
/*#endif //*/
```





