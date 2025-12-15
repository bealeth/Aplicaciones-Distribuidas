// npm install express

var express = require('express');
var app = express(); //Contenedor de Endpoints o WS Restful

//Permite enviar y contestar en .json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async function (request, response) {

    r ={
      'message':'Nothing to send'
    };

    response.json(r);
});

app.listen(3000, function() {
    console.log('Hola :D');
});
