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
        _PLATFORM: 'web', // 匹配业务环境标识
    }
  })
]
```


## 条件编译业务书写规则

js/ts:
```
//#if _PLATFORM==='web'
console.info('【js/ts】 in web')
//#else
console.info('【js/ts】 in other')
//#endif
```

vue:
```
<template>
  <div class="view">
    <!--#if _PLATFORM==='web'  //-->
    <HelloWorld msg="Welcome to web!"/>
    <!--#else //-->
    <HelloWorld msg="Welcome to other!"/>
    <!--#endif //-->
  </div>
</template>
```


css:
```
/*#if _PLATFORM==='web' //*/ 
.web {
    height: 10px
  }
/*#endif //*/
```






## TODO
- [ ] 单测编写
- [ ] 支持合并配置，而不是覆盖配置