const express = require('express');
const app = express();

app.listen(3030, ()=>{
    console.log("Servidor Activo");
})

app.use(express.static('../public')); // los archivos html se referencian desde esta pagina y no es necesario ingrar a la carpeta public posteriormente. 
const web = require('./routes/web'); 
app.use(web); // usa las rutas desde el archivo web.js 