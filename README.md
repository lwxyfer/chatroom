# BX-chatroom

https://github.com/coderhaoxin/welcome-to-bx/issues/1  要求

# 简介

整个项目分为：server端 和 client端 

## server

后端使用Node.js
WebSocket实现实时通讯。使用开源工具 [socket.io](http://socket.io/)
未使用数据库，直接储存在内存中。

## client

前端：

react
react-dom
babel
webpack
socket.io-client

# 结构以及简介


```
- chatroom
    - build
        - build.js           // webpack打包output
    - src
        - components         // react组件
            onlineuserlist.jsx
            showmsg.jsx
            submsg.jsx
        - css                // 样式文件，没有用webpack打包
            - style.css
        - index.jsx          // webpack 入口文件
    - .babelrc               // babel 配置
    - index.html             // 应用主页
    - package.json           // npm 包管理
    - server.js              // 后端文件，直接 node server.js 即可启动服务，未做其他额外设置
    - webpack.config.js      // webpack配置文件
```

# TODO

还有很多要去做的：

- 使用redux
- 提供普通的账号和邮箱注册功能
- 使用数据库存储数据
- 添加私聊的功能
- 简化代码，提高性能


# 最后

上面的几个技术要求，我都算是第一次接触，几天不多的时间去写，还有很多问题。有问题的地方，还希望您能够指出。写了一个简单的问题记录。https://www.zybuluo.com/lwxyfer/note/298643