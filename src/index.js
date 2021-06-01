const express = require('express');
const app = express();

app.listen(3030, ()=>{
    console.log("Servidor Activo");
})

app.use(express.static('../public'));
const web = require('./routes/web');
app.use(web);