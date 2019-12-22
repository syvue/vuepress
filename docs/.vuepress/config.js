module.exports = {
  title: 'Vue开发实战',
  description: '好好学习-天天向上',
  head: [
    ['link',{
      rel: 'icon',
      href: `/img/favicon.ico`
    }]
  ],
  // dest: './docs/./vuepresss/dist',
  // ga: "",
  // evergreen: true,
  themeConfig:{
    nav:[
      {text:'首页',link:'/'},
      {text:'软件',link:'/tools/'},
      {
        text:'Vue',
        items:[
          {text:'Vue.js基础',link:'/vue/tutorial/'},
          {text:'Vue项目开发',link:'/vue/project/'},
          {text:'VuePress',link:'/vue/vuePress/'},
        ]
      }
    ],
    sidebarDepth: 2,
    sidebar: [
     {
      title: '工具软件',
      collapsable: true,
      children: ['/tools/']
     },{
       title: 'Vue基础',
       collapsable: true,
       children: ['/vue/tutorial']
     },{
      title: 'Vue项目开发',
      collapsable: true,
      children: ['/vue/project']
    },{
      title: 'VuePress',
      collapsable: true,
      children: ['/vue/vuePress']
    }
    ]
  }
}