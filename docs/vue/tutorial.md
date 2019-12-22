# Vue.js基础

![Vue](/vuepress/img/logo.png)

[Vue.js官方网站](https://cn.vuejs.org/)

## vue简介

> **Vue.js**是现今三大流行前端框架之一(Angular.js,React.js,Vue.js),是一个只要拥有的html,css,javascript基础，就能很快学会的易用灵活的用于构建用户界面的渐进式前端框架。

## Vue.js新手入门

* 使用Vue.js非常简单，在HTML页面中使用**script**标签导入**Vue.js**文件就可以了。
如下例：

``` javascript

    <!-- 可以通过CDN直接使用网上的资源 -->

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <!-- 也可以使用本地资源 -->

    <script src="vue.js"></script>
```

* 接下来我们就可以来写一个Hello Vue.js!

```html

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Hello!Vue.js</title>
        <!-- 导入Vue.js -->
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        <div id="app">
            {{ message }}
        </div>


        <script>
            var app = new Vue({
                el: 'app',
                data: {
                    message: 'Hello Vue.js!!!!'
                }
            })
        
        </script>

        </body>
    </html>
```

* Vue.js的Demo
  
* vue-demo.html HTML主体文件， vue.js Vue框架文件 ，main.js Vue实例文件  
  
``` javascript

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Vue入门</title>
        
    </head>
    <body>
        
            <div id="app">
                <input type="text" v-model='name'> <span v-show='name'>你的名字：{{name}}</span><br>
                <input type="text" v-model='age'> <span v-show='age'>你的年龄：{{age}}</span><br>
                <input type="text" v-model='sex'> <span v-show='sex'>你的性别：{{sex}}</span><br>
                <ul>
                    <li v-for='food in foodList'>{{ food }}</li>
                </ul>
            
            </div>

            <!-- 导入Vue框架 -->
            <script src="vue.js"></script>
            <script src="main.js"></script>
    </body>
    </html>

```

* vue-demo.html

``` javascript
        //vue实例
    var app = new Vue({
        el: '#app',
        data: {
        name: null,
        age:null ,
        sex:null,
        foodList:['葱','姜','蒜']
        }
    });
```

* main.js

## Vue.js 的语法特点

> 双括号｛｛ ｝｝语法，Vue.js通过｛｛ ｝｝来实现数据的渲染。指令 (Directives) 是带有 v- 前缀的由Vue.js定义的特殊属性。例如：v-for,v-bind,v-show等等这些指令，除了Vue.js自带的属性，我们还可以自定义Vue指令。el是Element的缩写，el属性对应的是Vue框架挂载在HTML中对应的视图。 data是Vue实例的数据属性

### v-for指令

> 通过v-for指令来实现循环数组遍历，使用特定语法 v-for='alias in expression'，为当前遍历的元素提供别名,通常使用在ul或者ol标签中li选项中。

``` html

    <div id="app">
           <ul>
                <!-- <li v-for="food in foodList">{{ food }} </li> -->
                <li v-for='food in foodList'>
                        {{food.name}} ￥：{{food.discount ? food.price*food.discount : food.price}} 折扣率{{food.discount}}
                </li>
            </ul>

    </div>

    <script src="vue.js"></script>
    <script src="v-for.js"></script>

```
* vue-01.html

``` javascript
    var app = new Vue({
    el:'#app',
    data:{
        // foodList:['可乐','薯条','炸鸡']
        foodList:[
            {name:'可乐',price:3,discount:0.9},
            {name:'薯条',price:5,discount:0.8},
            {name:'炸鸡',price:10,discount:0},
        ]
    }
    })
```
* v-for.js

### v-bind 指令
> v-bind指令用来动态地绑定一个或多个特性，或一个组件 prop 到表达式。绑定时可以简略缩写为(冒号):。

``` html
     <!-- v-bind指令  -->
        <!-- <a href="http://baidu.com">baidu</a> -->
        <!-- <a v-bind:class="{'link':isOn,'bg':isActive}" v-bind:href="url">baidu -->
            <!-- v-bind缩写形式 -->
        <a  :href="url">

            <img :class='klans' :src="img" alt="">
        </a>
        <button v-on="{mouseenter:onEnter,mouseleave:onOut}" v-on:click='onClick'>点击</button>
        <!-- <form v-on:submit='onSubmit($event)'> -->
        <!-- <form v-on:keyup='onKeyUp' v-on:submit.prevent='onSubmit'> -->
        <!-- <form v-on:keyup.enter='onKeyEnter' v-on:submit.prevent='onSubmit'>
                <input type="text">
                <button type="submit">提交</button>
        </form> -->

```
vue-02.html

``` javascript
    var app = new Vue({
        el:'#app',
        data:{
            url:'https://baidu.com',
            img:'https://www.baidu.com/img/bd_logo1.png',
            // class1:'link bg',
            isOn:true,
            isActive:true,
            klans:'imgs1'
        }
})


```
v-bind.js

### v-on 指令
> v-on指令是绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。可以缩写为@符号。

``` html
    <button v-on="{mouseenter:onEnter,mouseleave:onOut}" v-on:click='onClick'>点击</button>
        <!-- <form v-on:submit='onSubmit($event)'> -->
        <!-- <form v-on:keyup='onKeyUp' v-on:submit.prevent='onSubmit'> -->
        <!-- <form v-on:keyup.enter='onKeyEnter' v-on:submit.prevent='onSubmit'>
                <input type="text">
                <button type="submit">提交</button>
        </form> -->
        <!-- v-on 缩写形式 -->
        <form @keyup.enter='onKeyEnter' @submit.prevent='onSubmit'>
                <input type="text">
                <button type="submit">提交</button>
        </form>
```
vue-02.html

``` javascript
   var app = new Vue({
        el:'#app',
        data:{ },
        methods:{
            onClick:function(){
                console.log('点击成功！！')
            },
            onEnter:function(){
                console.log('移动进来了！')
            },
            onOut:function(){
                console.log('我出来了！！')
            },
            // onSubmit:function( e ){
            //     e.preventDefault();
            //     console.log('提交成功')
            // },
            onSubmit:function(  ){
               
                console.log('提交成功')
            },
            // onKeyUp:function(  ){
               
            //     console.log('键盘点击成功')
            // },
            onKeyEnter:function(  ){
               
                console.log('点击回车成功')
            },
        }
})

```

v-on.js

### v-model 指令

> v-model限制用在input,select,textarea三个标签,在表单控件或者组件上创建双向绑定。
``` html
    <!-- 
    <div id="app">
         <input type="text" v-model='name'> -->
        <!-- <input type="text" v-model.lazy='name'> -->
        <!-- <input type="text" v-model.trim='name'> -->
        <input type="text" v-model.number='name'>
        <!-- <pre>
        {{ name }}
        </pre> -->
        {{name}} <br>
        <!-- <label >
                男
             <input name="sex" value="male" type="radio">
        </label> -->
        <label >
                男
             <input v-model="sex" value="male" type="radio">
        </label>
        <label >
                女
             <input v-model="sex" value="female" type="radio">
        </label>
        <br>
        {{sex}}
        <br>
        <label >
                西瓜
             <input v-model="food" value="水果" type="checkbox">
        </label>
        <label >
                辣椒
             <input v-model="food" value="蔬菜" type="checkbox">
        </label>
        <br>
        {{food}}
        <br>
        <textarea name="" v-model='content'></textarea>
        <br>
        <select v-model='from'>
            <option value="1">北京</option>
            <option value="2">上海</option>
            <option value="3">广州</option>
        </select>
        {{from}}
        <br>
        <select v-model='goto' multiple>
                <option value="1">北京</option>
                <option value="2">上海</option>
                <option value="3">深圳</option>
                <option value="4">广州</option>
        </select>
        {{goto}}
    </div>
    <script src="vue.js"></script>
    <script src="v-model.js"></script>
```

vue-03.html

``` javascript
    var app = new Vue({
    el:'#app',
    data:{
        name:'',
        content:'Vue实例本质上是MVVM模式中定义的ViewModel，因此您将在整个文档中看到变量名称vm。实例化Vue实例时，需要传入一个options对象，该对象可以包含数据，模板，要挂载的元素，方法，生命周期回调等选项。',
        from:'1',
        sex:'',
        food:[],
        goto:''
     }
    })
```

v-model.js

### v-if v-else v-else-if 控制流指令

``` html
      <div id="app">
        <div v-if="role =='admin' || role=='super_admin '">
            管理员你好
        </div>
        <div v-else-if="role == 'hr'">
            待查看简历列表: <br>
            .....
        </div>
        <div v-else>
            你没有权限访问页面
        </div>

    </div>

    <script src="vue.js"></script>
    <script src="v-if.js"></script>

```

vue-04.html

``` javascript
    var app = new Vue({
    el:'#app',
    data:{
        // role:'admin',
        // role:'super_admin',
        role: 'hr'
    }
})

```
v-if.js

### computed 计算属性

> 计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。

``` html
<div id="app">
        <!-- <table >
                <thead>
                    <th>
                        科目
                    </th>
                    <th>
                        分数
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td>数学:</td>
                        <td>{{math}}</td>
                    </tr>
                    <tr>
                        <td>物理:</td>
                        <td>{{physics}}</td>
                    </tr>
                    <tr>
                        <td>英语:</td>
                        <td>{{english}}</td>
                    </tr>
                    <tr>
                        <td>总分：</td>
                        <td>{{math+physics+english}}</td>
                    </tr>
                    <tr>
                        <td>平均分：</td>
                        <td>{{(math+physics+english)/3}}</td>
                    </tr>
                </tbody>
        </table> -->
        <table >
                <thead>
                    <th>
                        科目
                    </th>
                    <th>
                        分数
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td>数学:</td>
                        <td><input type="text" v-model.number='math'></td>
                    </tr>
                    <tr>
                        <td>物理:</td>
                        <td><input type="text" v-model.number='physics'></td>
                    </tr>
                    <tr>
                        <td>英语:</td>
                        <td><input type="text" v-model.number='english'></td>
                    </tr>
                    <tr>
                        <td>总分：</td>
                        <!-- <td>{{math+physics+english}}</td> -->
                        <!-- <td>{{sum()}}</td> -->
                        <td>{{sum}}</td>
                    </tr>
                    <tr>
                        <td>平均分：</td>
                        <!-- <td>{{Math.round((math+physics+english)/3)}}</td> -->
                        <td>{{average}}</td>
                    </tr>
                </tbody>
        </table>

    </div>
    <style>
        table,th,tr,td{
            border:1px solid #000;
            border-collapse:collapse;
        }
    </style>
    <script src="vue.js"></script>
    <script src="computed.js"></script>
```

vue-06.html

``` javascript
var app = new Vue({
    el:'#app',
    data:{
        math:80,
        physics:70,
        english:60,
    },
    computed:{
        sum:function(){
            return this.math + this.physics + this.english;
        },
        average:function(){
            return Math.round(this.sum/3)
        }
    }
    // methods:{
    //     sum:function(){
    //         return this.math + this.physics + this.english;
    //     }
    // }
})

```
computed.js -->

### component 组件基础

* 全局组件/局部组件

``` html

  
    <div id="app1">
        <alert></alert>
        <alert></alert>
        <alert></alert>
    </div>
    <div id="app2">
        <!-- <alert></alert>
        <alert></alert>
        <alert></alert> -->
        
    </div>    
    
    <script src="vue.js"></script>
    <script src="component01.js"></script>

```

vue-07.html

``` javascript
    // 全局组件 vue.component('my-component-name',{....})
    // Vue.component('alert',{
    //     template:'<button @click="on_click">点击</button>',
    //     methods:{
    //         on_click:function(){
    //             alert('yo~~~~');
    //         }
    //     }
    // });

    //局部组件
    var alert_component ={
        template:'<button @click="on_click">点击</button>',
                methods:{
                    on_click:function(){
                        alert('yo~~~~');
                    }
    }
    };

    new Vue({
        el:'#app1',
    
        components:{
        
            //局部组件
            // alert:{
            //     template:'<button @click="on_click">点击</button>',
            //     methods:{
            //         on_click:function(){
            //             alert('yo~~~~');
            //         }
            // }
            alert:alert_component
        }      
    })
    new Vue({
        el:'#app2'
    })

```

component01.js

* component 组件配置 实现点赞功能

``` html
      <div id="app">
            <like></like>
            <like></like>
            <like></like>
        </div>


        <template id='like-component-tpl'>
                <button :class="{liked:liked}" @click="toggle_like()">
                        👍{{like_count}} 
                </button>
        </template>

    <script src="vue.js"></script>
    <script src="component02.js"></script>

    <style>
        .liked{
            background:deeppink;
        }
    </style>

```

vue-08.html

``` javascript

    Vue.component('like',{
    // template:'<button :class="{liked:liked}" @click="toggle_like()">👍{{like_count}} </button>' ,
    // template:
    //  `
    //     <button :class="{liked:liked}" @click="toggle_like()">
    //                 👍{{like_count}} 
    //     </button>
    // `
    template: '#like-component-tpl'  ,
    
    data:function(){
        return {
            like_count:10,
            liked: false
        }
    },
    methods:{
        toggle_like:function(){
            if(!this.liked){
                 this.like_count++;
             }else{
                 this.like_count--;
             }

             this.liked = !this.liked;
        }
    }
})

new Vue({
    el:'#app',
})

```

component02.js

### component 组件之间通信

``` html
  <!-- prop -->
    <div id="app">
        <h2>Prop</h2>
        <alert msg='今天天气不错！' msg1=''></alert>
        <alert msg='今天天可能下雨！' msg1='注意带伞~~'></alert>
        <alert msg='明天可能多云！' msg1=''></alert>
        <!-- 父子组件通信 -->
        <h2>组件之间通信</h2>    
        <balance></balance>

        <!-- 平行组件之间通信 -->
        <h2>平行组件之间通信</h2>
        <text-in></text-in>
        <text-out>
    </div>

    <script src="vue.js"></script>
    <script src="component03.js"></script>

```

vue-09.html

``` javascript
//props 传递信息
Vue.component('alert',{
    template:
    `
        <button @click='on_click'>信息</button>
    `,
    props:['msg','msg1'],
    methods:{
        on_click:function(){
            alert(this.msg);
            console.log(this.msg1);
        }
    }
})
// 父子组件通信
Vue.component('balance',{
    template:`
        <div>
            <show @show-balance='show_balance'></show>
            <div v-if="show">
                你的余额：￥100元
            </div>
        </div>
    `,
    data:function(){
        return {
            show: false,
        }
    },
    methods:{
        show_balance: function(data){
            this.show= true;
            console.log('data',data)
            
        }
    }
})

Vue.component('show',{
    template:`
        <button @click='on_click()'>显示余额</button>
    `,
    methods:{
        on_click(){
            this.$emit('show-balance',{
                message:'显示成功~~~'
            })
        }
    }
})
// 平行组件之间传递信息
var Event = new Vue();

Vue.component('text-in',{
    template:`
        <div>
        文本输入：<input @keyup="on_change" v-model="write_in">
        </div>
        `,
    methods: {
        on_change:function(){
            Event.$emit('write-something',this.write_in);
        }
    }
        ,
    data:function(){
        return {
            write_in:'',
        }
        
    }
})
Vue.component('text-out',{
    template:`
        <div>
            文本输出：{{put_out}}
        </div>
    `,
    data:function(){
        return {
            put_out : '',
        }
    },
    // 生命周期钩子：初始化结束
    mounted:function(){
    //    console.log('初始化：'+this);
        var me =this;
        Event.$on('write-something',function(data){
         //  console.log('事件监听'+this);
           me.put_out = data;
        })
    }
})

new Vue({
    el:'#app'
})


```

component03.js

### Vue.filter 过滤器

* Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：

``` html
    <!DOCTYPE html>
    <html>

    <head>
        <title> Vue.filter 过滤器</title>
      
    </head>
    <body>

    <div id="app"> 

    <div>
    <input v-model="lenght">mm
            {{lenght|meter}}
    </div>
    <hr>
    <div>
    <input v-model="price">
        {{price | currency('USD')}}
        </div>
    </div > 

    <script src="vue.js"></script>
    <script src="filter.js"></script>
    </body>
    </html>
``` 
vue-10.html

``` javascript
    Vue.filter('meter',function (val,unit) {
            val=val||0;
            unit=unit||'m';
            return (val/1000).toFixed(2) + unit;
        });

        Vue.filter('currency',function (val,unit) {
            val=val||0;
            unit=unit||'RMB';
            return val + unit;
        });


        new Vue({
            el:'#app',
            data:{
                price:10,
                lenght:100,
            }
        })
```

filter.js

### 自定义指令

* 除了核心功能默认内置的指令 (v-model 和 v-show)，Vue 也允许注册自定义指令。注意，在 Vue2.0 中，代码复用和抽象的主要形式是组件。然而，有的情况下，你仍然需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。

``` html
    <!DOCTYPE html>
    <html>

    <head>
        <title>自定义指令 </title>
    <style>
        .card{
        width: 200px;
        background: #ccc;
        padding: 10px;
        margin: 5px;
        }
    </style>
       
    </head>
    <body>

    <div id="app"> 
        <div v-pin:true.buttom.right="card1.pinned" class="card">
        <button @click="card1.pinned = !card1.pinned"> 钉住/取消</button>
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div>
        <div v-pin="card2.pinned" class="card">
        <a @click="card2.pinned = !card2.pinned" href="#">如果</a>
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div>
        <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div>
        <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div>
        <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div>
        <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div> <div >
        如果运算复杂可以考虑计算属性,计算属性带缓存
        </div>
    </div > 

    <script src="vue.js"></script>
    <script src="directives.js"></script>
    </body>
    </html>

```

vue-11.html

```javascript
    Vue.directive('pin',function(el,binding) {
        var pinned=binding.value;
        var position=binding.modifiers;
        var waring=binding.arg;
        console.log('position:',position);
            //console.log('val:',val);
        if(pinned){
                el.style.position='fixed';
                for(var key in position){
                    if(position[key]){
                        el.style[key]='10px';
                    }
                }
            if (waring==='true') {
                el.style.background='yellow';
            }
        }else{
            el.style.position='static';
        }
    }),

    new Vue({
        el:'#app',
        data:{
            card1:{
                pinned:false,
            },
            card2:{
                pinned:false,
            }
        }
    })
```
directives.js

#### 混入 mixin

* 混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。

``` html
 <!DOCTYPE html>
    <html>

    <head>
        <title> 混入 mixin  </title>
    </head>
    <body>

    <div id="app"> 
        <popup></popup>
        <tooltip></tooltip>
    </div > 

    <script src="vue.js"></script>
    <script src="mixin.js"></script>
    </body>
    </html>

```

vue-12.html

``` javascript

    var base={
        methods:{
            show:function(){
                this.visible=true;
            },
            hide:function(){
                this.visible=false;
            },
            toggle:function(){
            this.visible=!this.visible;
            },
        },
        data: function () {
            return{
                visible:false,
            }
        }
    }

    Vue.component('tooltip',{
        template:`
            <div>
            <span @mouseenter="show" @mouseleave="hide">bys</span>
                <div v-if="visible">
                        好好学习，天天向上
                </div>
            </div>
        `,
        mixins:[base],
        data:function(){
        return{
            visible:true,
        }
    }
    });

    Vue.component('popup',{
        template:`
        <div>
                <button @click="toggle">popup</button>
                <div v-if="visible">
                <span @click="hide">X</span>
                <h2> title</h2>
                 mixin 混入
                </div>
        </div>`,
        mixins:[base],

    })


    new Vue({
        el:'#app',
        data:{

        }
    })

```

mixin.js

### 插槽 slots

* Vue 实现了一套内容分发的 API，这套 API 的设计灵感源自 Web Components 规范草案，将 slot 元素作为承载分发内容的出口。

``` html
    <!DOCTYPE html>
    <html>

    <head>
        <title> VUE 插槽</title>
        <style >
            .panel{
                max-width: 300px;
                border: 1px solid #999;
                margin-bottom: 15px;
                
            }
            .panel > *{
                padding: 15px;
            }
            .panel .title{
                border-bottom: 1px solid #999;

            }
            .panel .footer{
                border-top: 1px solid #999;
                text-align:right;
                height: 20px;
            }
        </style>
    </head>
    <body>

    <div id="app"> 
        <panel>
                <div slot="title">
                    Vue这是标题栏
                </div>
                <div slot="content">
                    2YO>>>>>有******我来试试
                </div>
        </panel>
        <panel>2YO>>>>>有******</panel>
        <panel>
            <div slot="title">
                在目前的三大前端框架中
            </div>
            <div slot="content">
        在目前的三大前端框架中（Vue，Angular，React）Vue怕是最好上手的框架了，然而其核心功能和其他两者也竟然不相伯仲，那有什么理由不先学它呢？
            </div>
        </panel>
    </div > 

    <template id="panel-tpl">
        <div class="panel">
                <div class="title">
                    <slot name="title"></slot>
                </div>
                <div class="content">
                    <slot name="content"></slot>
                </div>
                <div class="footer">more>></div>
        </div>
    </template>
    <script src="vue.js"></script>
    <script src="slots.js"></script>
    </body>
    </html>

```

vue-13.html

```javascript
    Vue.component('panel',{
        template:"#panel-tpl",
    });

    new Vue({
        el:'#app',
        data:{

        }
    })
```
slots.js
