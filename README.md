# chatroom

DEMO：http://ccchat.coding.io/

It's a project for learning ES2015 & React.js & Node.js

provide basic chat & an AI what you can teach

## server

Back-end

- Node.js
- use express to start a HTTP server
- WebSocket provide full-duplex connection. use open source tool [socket.io](http://socket.io/)
- no database

## client

Front-end：

- react
- react-dom
- babel
- webpack
- socket.io-client

# structure

directory and intro

```
- chatroom
    - app                        //client 
        - build
            - build.js           // webpack output file
        - src
            - components         // react components, jsx
                onlineuserlist.jsx
                showmsg.jsx
                submsg.jsx
            - css                // stylesheet, use link to reference not webpack
                - style.css
            - index.jsx          // webpack entry
        - .babelrc               // babel config
        - index.html             // app index
        - webpack.config.js      // webpack config
    - package.json           // npm package.json
    - server.js              // `node server.js` to start server
```

run:

```
// first
npm install
//second
node server.js
//third
open http://localhost:3000 to visit
```

build:

```
//FE: use webpack command in `app` folder 
cd app
webpack --progress --colors  

// BE: default:http://localhost:3000
node server.js
```

# TODO

- redux
- provide register function
- use database
- private chat with others
- change text size & color
- web cache


# changelog

- 2016/3/10
    - simplfy html structure
    - use flex
    - highlight text

- 2016/3/14
    - UI
    - ctrl + enter  to send message
    - keep scroll bar in bottom
    - add TURING Robot
    
- 2016/4/1
    - emoji
    - formatting text

# support

I just test chrome (chrome dafa hao)




完整的应用开发，

限制发言快慢，时间为1S 间隔

1 ： 看别人的项目，学习一些整体的规划 与代码编写
2： redux
3： 决定是否完全重写

请不要以一个初学者的身份对待自己。


webpack详细设置，进阶教程（比如路径，

react 详细文档，ES6写法的问题与总结

自己写模块化的插件 TOC

socket.io  源码阅读，实现。写这么多，用这么多，连个源码都不清楚。还有实现个模板引擎，双向绑定这类的工具。SG的17行实现的模板引擎。

最后达成： 熟悉react webpack ES6 模块化支持 
别人问，我就得知道。不要写个熟悉上去，别人问个问题，啥都不知道。


数据库，缓存，中间件，个人信息的存储，RESTful API的设计

不要边玩边写，最后就啥都不记得。

后面代码实现时，把cookie这些的具体实现，还有具体的MVC这些模式的使用。最后代码要提出现出水平。全部记下来。  营销自己出去。找工作，没个几天了。


整个项目 包含前后端，能够快速搭建，集成到页面中去。为项目添加实时沟通能力。变为一个大型的插件。


这里的前后端是否分离，，模块之间的联系。放在一起还是怎么的。

我是要做成产品还是工具。可以参考gitter  teambition


覆盖率和单元测试  这个是什么，原理