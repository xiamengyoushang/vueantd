# Vue知识点整理

### 注意事项
- 以下整理基于MacOS开发环境进行编写

### 环境配置 
- 编译器
```
安装IDEA教程：当前教程为2020版本
https://shimo.im/docs/eavXX1p7YiQMv9oS/read
IDEA 索引及自动配置比较方便，但正常代码异常爆红比较多；旗舰版IDEA会收费

安装VSCode+Vue插件配合使用  
VSCode在一些自动索引及插件引导安装上体验不甚好，但在前端领域比较流行

个人建议 以上两种都要会
```
- Nodejs
 ```
安装Nodejs，下载地址：https://nodejs.org/zh-cn/download/
安装Nodejs教程：
win: https://www.jianshu.com/p/13f45e24b1de
mac: https://blog.csdn.net/yst19910702/article/details/89714544
国内npm有点慢，可以设置成淘宝的镜像来代替原有的，输入命令npm config set registry https://registry.npm.taobao.org
安装后输入命令node –v、npm –v，可以获取版本
修改权限：sudo chmod 777 /usr/local/lib/node_modules   

个人建议 npm可能会慢，可以尝试用一下cnpm及yarn；理论上都要会
 ```
- Ruby
 ```
安装Ruby
brew install rbenv
https://www.jianshu.com/p/bbe6d6860881
 ``` 

- Vue Cli构建工具
```
安装Vue Cli
npm install -g @vue/cli
https://cli.vuejs.org/zh/guide/prototyping.html

注意：按我这个脚本安装，官网那个貌似有点问题；
另外我目前自用的版本是vue3，实测经过配置后可以兼容到IE11
```
### 脚本相关 
```
查看版本
vue -V

创建项目
vue ui
or 
vue create project

vue 依赖项配置
npm install

vue 开发模式编译
npm run serve  (个人不建议用这种)
npm run serve -- --port 5000 (可以配置端口)

vue 项目打包
npm run build 

nginx           #启动nginx
nginx -s quit   #快速停止nginx
nginx -V        #查看版本，以及配置文件地址
nginx -v        #查看版本 
nginx -h        #帮助

#重新加载配置|重启|快速停止|安全关闭nginx
nginx -s reload|reopen|stop|quit  

macos端口占用问题检测
命令行：lsof -i :8081

附录：新增几个Angular常用脚本
ng version
ng new project
ng serve --o
ng serve --host xxx.xxx.xxx.xxx --port 4200
ng build --prod --aot
```

### 语法相关
    这里略过html,css,js等相关知识
    参考文档：https://cn.vuejs.org/v2/guide/syntax.html

- Vue介绍
```
Vue是前端的主流框架之一，和Angular、React一起，并成为前端三大主流框架
Vue是一个mvvm的框架
Vue是vue的实例，这个实例存在计算机中，主要干俩大事：1、绑定事件；2、dom检测
Vue全家桶包括：vuex、vue-router、vue-resource 还有构建工具vue-cli
```
- Vue常用属性
```
props 类似构造函数，可以接收一些初始化变量
data  声明一些全局变量
created 初始化方法
methods 事件方法
components 组件
```
- Vue常用语法
```
指令式渲染：
v-html，v-text 采用{{}}语法==>插值运算
v-html：它可以加标签，它会解析成html
v-text：不能加标签，如果加了，它会当作字符串展示出来

插值表达式渲染：   
{{ data中的数据 }}

v-html 与 v-text的区别：
v-html会解析html格式
v-text与插值表达式会把内容当做文本来解析
v-html 和 v-text都会覆盖元素中原有的内容
```
```
条件指令：v-if  v-else  v-else-if 相当于删除dom节点
显示指令：v-show 相关于改变css中的display
v-if是对节点的删除和添加，v-show是堆display属性值none和block的切换
```
```
循环指令：v-for
值是一个数组  (item,index) in 数组名
值是一个对象  (value,key)  in 对象名        value是属性值，key是属性

注意事项
v-for 循环的时候，key属性只能使用 number 或string，且是惟一的
key在使用的时候，必须使用 v-bind 属性绑定的形式，指定key的值
```
```
动态属性：v-bind:class="a"
可以简写  :class="a"          v-bind可以省略
```
```
节点上绑定事件，监听事件：
v-on:click="fn"         可简写：@click="fn"
事件方法写在methods中
```
```
v-model 数据绑定，双向绑定
实现原理：vue靠的是数据劫持和发布者订阅者模式
```
### Vue组件化思想
```
组件化顾名思义, 为组件是独立的, 组件可复用的,整体化的组件.
组件化的目的: 实现功能模块的复用,
高执行效率,
开发单页面复杂应用,可以将复杂的业务逻辑进行拆分

组件间的状态管理
Vuex
多组件的混合使用,多页面,复杂业务(vue-router)
组件间的传参,消息,事件管理(props, emit/on)
vuex单向数据流概念,
view->actions->state->view
```

### 项目结构及框架
```
注意：以下为完整项目配置，创建项目时可选
├── README.md            项目介绍
├── public               公共目录
│  ├── index.html        入口页面 
│  ├── favicon.ico       项目图标 
├── config               项目配置
│  ├── dev.env.js        开发环境变量
│  ├── index.js          项目配置文件
│  ├── prod.env.js       生产环境变量
│  └── test.env.js       测试环境变量
├── mock                 mock数据目录
│  └── hello.js   
├── package.json         npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
├── src                  源码目录 
│  ├── main.js           入口js文件
│  ├── app.vue           根组件
│  ├── components        公共组件目录
│  │  └── title.vue
│  ├── assets            资源目录，这里的资源会被wabpack构建
│  │  └── images
│  │    └── logo.png
│  ├── routes            前端路由
│  │  └── index.js
│  ├── store             应用级数据（state）状态管理
│  │  └── index.js
│  ├── api               服务接口
│  │  └── xxx.js
│  ├── layout            项目框架层
│  │  └── xxx.js
│  ├── utils             项目工具层
│  │  └── xxx.js
│  └── views             页面目录
│    ├── hello.vue
│    └── notfound.vue
├── static               纯静态资源，不会被wabpack构建。
└── test                 测试文件目录（unit&e2e）
  └── unit               单元测试
    ├── index.js         入口脚本
    ├── karma.conf.js    karma配置文件
    └── specs            单测case目录
      └── Hello.spec.js
```

### 打包及服务器配置
```
npm run build 打包
生成dist目录存放项目输出包（已压缩、混淆）
```    
```
nginx安装和配置，部署前端输出包
https://www.jianshu.com/p/026d67cc6cb1
https://www.cnblogs.com/maochunyan/p/9490574.html

一.安装nginx 
1.brew install nginx
2.启动nginx服务 brew services start nginx
3.访问http://localhost:8080  

二.终端快捷指令
nginx  #启动nginx
nginx -s quit  #快速停止nginx
nginx -V #查看版本，以及配置文件地址
nginx -v #查看版本
nginx -s reload|reopen|stop|quit   #重新加载配置|重启|快速停止|安全关闭nginx
nginx -h #帮助

三.部署
1.网页部署到/usr/local/Cellar/nginx/1.17.10/html路径下
2.配置/usr/local/etc/nginx/nginx.conf路径下的nginx.conf文件
3.编辑nginx.conf文件新增以下内容
server{
        listen       9000;
        server_name  localhost;
	    location / {
            root   html/index-page;
            index  index.html;
	        try_files $uri $uri/ /index.html;
        }
        error_page   500 502 503 504  /50x.html;
        location = ../50x.html {
            root   html;
        }
}
4.访问http://localhost:9000/
5.配置sites-enabled  区分多个项目
nginx.conf文件中配置 include ./sites-enabled/*.conf;
然后nginx -s reload 刷新生效
```


