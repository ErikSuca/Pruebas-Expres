const express = require('express');
const app = express();

app.listen(3030, ()=>{
    console.log("Servidor Activo");
})

const web = require('./routes/web');
app.use(web);