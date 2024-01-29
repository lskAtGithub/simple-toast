## simple-message-toast

### 概述

在开发小型项目时， 有时会需要用到消息提示，去安装UI库按需加载又有点麻烦，此时可以使用 simple-message-toast， 支持 vue2, vue3, react, HTML, 简单易用


### 安装

```
npm i simple-message-toast
```

### 使用
```
import { SpMessage } from 'simple-message-toast'
import 'simple-message-toast/lib/css/style.css'

const spMessage = new SpMessage(options)
spMessage.info('',{})
spMessage.success('',{})
spMessage.warn('',{})
spMessage.error('',{})
```

### options

| 属性名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| duration | number | 3000 | 全局的消息提示存在时间 |
| typeColor | Object\<typeColor\> | typeColor | 针对各种消息类型的颜色全局配置 |

### typeColor
| 属性名 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| infoColor | string | #ffffff | 非必填 | 普通消息的字体颜色 |
| infoBgColor | Object | Object | 非必填 | 普通消息的背景颜色 |
| successColor | string | #ffffff | 非必填 | 成功消息的字体颜色 |
| successBgColor | string | #ffffff | 非必填 | 成功消息的背景颜色 |
| warnColor | string | #ffffff | 非必填 | 警告消息的字体颜色 |
| warnBgColor | string | #ffffff | 非必填 | 警告消息的背景颜色 |
| errorColor | string | #ffffff | 非必填 | 错误消息的字体颜色 |
| errorBgColor | string | #ffffff | 非必填 | 错误消息的背景颜色 |


### 方法

| 方法名 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| info | params1: string ; params2: MethodsParams2 | void | 普通消息提示, 第一个参数是提示内容，第二个参数是针对本条消息提示的配置 |
| success | params1: string ; params2: MethodsParams2 | void | 成功消息提示，第一个参数是提示内容，第二个参数是针对本条消息提示的配置 |
| warn | params1: string ; params2: MethodsParams2 | void | 警告消息提示，第一个参数是提示内容，第二个参数是针对本条消息提示的配置 |
| error | params1: string ; params2: MethodsParams2 | void | 失败消息提示，第一个参数是提示内容，第二个参数是针对本条消息提示的配置 |

### MethodsParams2
| 属性名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| color | string | 非必填 | 本条消息的字体颜色 |
| bgColor | string | 非必填 | 本条消息的背景颜色 |
| duration | number | 非必填 | 本条消息的存在时间 |