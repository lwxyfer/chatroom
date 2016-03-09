# BX-chatroom

https://github.com/coderhaoxin/welcome-to-bx/issues/1  要求

# 简介

整个项目分为：server端 和 client端 

## server

后端

- 使用Node.js
- 使用express建立HTTP服务，通过express.static内置中间件函数来访问页面。
- WebSocket实现实时通讯。使用开源工具 [socket.io](http://socket.io/)
- 未使用数据库，直接储存在内存中。

## client

前端：

- react
- react-dom
- babel
- webpack
- socket.io-client

# 结构以及简介

下面是整个项目的结构和配置

```
- chatroom
    - app                        //client 
        - build
            - build.js           // webpack打包output
        - src
            - components         // react组件，使用babel处理jsx文件
                onlineuserlist.jsx
                showmsg.jsx
                submsg.jsx
            - css                // 样式文件，没有用webpack打包
                - style.css
            - index.jsx          // webpack 入口文件
        - .babelrc               // babel 配置
        - index.html             // 应用主页
        - webpack.config.js      // webpack配置文件
    - package.json           // npm 包管理
    - server.js              // 后端文件，通过命令node server.js 即可启动http服务
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
//client:在app文件夹里运行webpack打包，没有定义npm命令
cd app
webpack --progress --colors  

// server
node server.js
```


# TODO

还有很多要去做的：

- 使用redux
- 提供普通的账号和邮箱注册功能
- 使用数据库存储数据
- 添加私聊的功能
- 简化代码，提高性能

# Q

退出  socket.xxx  自定义数据
消息滚动
最新加入 position:fixed
增加MD，emoji，img 
自定义路由
hash 值改变
消息颜色
代码语法高亮
使其具有富文本的功能

解决文本转义： 能有空格 和 换行

最终成为一款比较成熟的产品

# 最后

上面的几个技术要求，我都算是第一次接触，几天不多的时间去写，还有很多问题。有问题的地方，还希望您能够指出。写了一个简单的问题记录。https://www.zybuluo.com/lwxyfer/note/298643


现在两个事件 混合了，处理起来有点问题。

# changelog

- 2016/3/10
    - simplfy html structure
    - use flex
    - highlight text