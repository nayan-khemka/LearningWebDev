const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Day6</title>
      <style>
          body{
              background-color: black;
              color:white;
              text-align: center;
          }
           #box{
               display:flex;
               height: 200px;
               width: 200px;
               background-color:blueviolet;
               align-items: center;
               justify-content: center;
  
  
               transition-property: background-color;
               transition-duration: 1s;
               /* transition-timing-function: ease-in; */
               transition-delay: .2s;
  
               /* transition shorthand */
               /* transition: background-color(property which will transition, you can also do all) duration ease-in-out delay; */
               transition:all .2s;
           }
  
           #box:hover{
               background-color: bisque;
               height: 400px;
               width: 400px;
               font-size: 70px;
               border-radius: 102px;
               border: 2px solid blue;
               /* margin: auto; */
           }
           .contain{
               height: 70vh;display: flex;
               justify-content: center;
               align-items: center;
               background-color: violet;
           }
            .box{
                background-color: blue;
                display: flex;
               justify-content: center;
               align-items: center;
                border:2px solid white;
                border-radius: 12px;
                height:400px;
                width:400px;
                transition:3s;
            }
            .box:hover{
              transform: rotate(360deg);
              transform: skew(40deg);
              transform: scale(2);
            }
      </style>
  </head>
  <body>
      <h1>Transitions</h1>
      <div class="container">
          <div id="box">
              This is my box
          </div>
      </div>
      <hr>
      <h1>Transform Properties</h1>
      <div class="contain">
          <div class="box">
              This is a box
          </div>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});