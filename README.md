# chatroom

DEMO：https://chatroom-lwxyfer.c9users.io/

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
- rewrite css

react-router $ redux to finish the whole application

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



