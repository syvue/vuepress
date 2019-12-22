# VuePress快速上手

## VuePress简介

* [VuePress中文网](https://www.vuepress.cn/) 

## 安装并初始化VuePress项目

* 在GitHub远程仓库中新建一个项目documents,然后隆这个项目到本地。
 
```bash
 git clone https://github.com/XXXXX/documents.git
 # 克隆你的项目到本地 XXXXX表示你的github账号

 cd documents
 # 通过cd 命令进入你项目目录

 npm init -y
 # 通过npm命令快速初始化你的项目，目录中多一个package.json文件

 npm install vuepress --save
 # 局部安装vuepress

```
* 配置package.json中的scripts下添加下面的两行代码

``` javascript
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
* 建立基本目录和相应文件此时目录结构如下：
```bash
documents
├─package.json              
├─.gitignore
├─docs
|  ├─README.md
|  ├─.vuepress
|  |     ├─config.js
|  |     ├─public
|  |         └favicon.ico
|  ├─pages
|  |  ├─vuepress.md 
|  |  ├─html.md 
|  |  ├─css.md 
#目录结构
 
```

* 修改README.md添加首页模版
```markdown
---
home: true
heroImage: /img/favicon.ico
actionText: 快速上手 →
actionLink: /pages/vuepress/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present xxxxxx
---
```

* docs/README.md

```bash
 npm run docs:dev
# 运行编译，如果安装成功，我们可以在浏览器中预览
```

## 配置路由和导航和侧边栏


* 我们在config.js添加配置路由和导航的代码。

```javascript
module.exports = {
    title: 'VuePress快速入门', // 标题
    description: 'VuePress教程', //项目描述 
    head: [                 //配置图标
        ['link',{
            rel:'icon',
            href: `/img/favicon.ico`
        }]
    ],
    themeConfig: {
        nav: [     //配置导航路由
            { text: '首页', link: '/'},   //首页导航
            { text: 'vuepress', link: '/pages/vuepress/'}, //一层目录导航
            { text:'前端技术',              //多层目录导航
              items:[
                 {text:'HTML',link: '/pages/html/'}, 
                 {text:'CSS',link: '/pages/css/'} 
              ]
            }
        ],
        sidebar: [  //侧边栏配置
            {
                title:'VuePress',   
                collapsable: true,
                children: ['/pages/vuepress']
            },
            {
                title:'HTML',
                collapsable:true,
                children: ['/pages/html']
            },
            {
                title:'CSS',
                collapsable:true,
                children:['/pages/css']
            }
        ],
        sidebarDepth: 1
    }
}

```


## 部署到GitHub

