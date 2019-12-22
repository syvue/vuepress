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


## 部署到gitHub

### 设置远程的SSH免密登录

* 创建本机SSH KEY

``` bash
ssh-keygen -C "你的@邮件地址.com"
# 命令执行后，会出现提示信息，回车确认即可


```
* 打开C:\Users\Administrator\.ssh目录，里面会有id_rsa和id_rsa.pub两个文件，使用记事本打开id_rsa.pub，这个文件里会有一大串编码。

* 登录GitHub,打开用户的Settings选项，找到Personal settings下面的 SSH and GPG keys选项。
![](/vuepress/img/git8.png)
* 点击new SSH key按钮。在title项输入标题，再将id_rsa.pub里的编码复制到Key项中，点击 Add SSH key
![](/vuepress/img/git9.png)
* 在本地执行 ssh -T git@github.com 命令来测试是否设置成功。
``` bash
ssh -T git@github.com
# 执行命令，测试是否ssh是否设置成功
# 如果出现  Permission denied (publickey) 的提示，说明设置失败，需要重新设置。
```
### 配置vuepress项目部署到GitHub仓库
* 在config.js 增加base,repo,repoLabel三个属性，代码如下

```javascript
module.exports = {
    title: 'VuePress快速入门', // 标题
    description: 'VuePress教程', //项目描述 
    base:'/documents/',         //基础路径，
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
        sidebarDepth: 1,
        repo:"/syvue/documents",  //指定我们远程仓库和项目
        repoLabel: '项目源码'      //指定源码兰连接
    }
}
```
* 在项目目录下新建deploy.sh文件，具体代码如下：
```bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:<远程仓库的用户名>/<项目名>.git master:gh-pages

cd -
```
* 最后修改package.json文件，在scripts项中添加一行代码
```json
{
  
  "scripts": {
 
    "deploy":"bash deploy.sh"
  }
}

```
* 完成后我们执行
``` bash
npm run deploy
# 执行命令然后等待编译完成
```
* 再次打开github项目地址，点击当前项目的Settins选项。
![](/vuepress/img/git7.png)
* 找到GitHub Pages项，再在Soures中选择gh-pages 分支。
![](/vuepress/img/git6.png)
* 完成之后我们就可以通过 GitHub Pages 上的地址直接方面了。


