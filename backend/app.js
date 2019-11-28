const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const rotasIpLocation = require('./rotas/ipLocation');
const rotasIpUsuario = require('./rotas/ipUsuario') 
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(rotasIpLocation)
app.use(rotasIpUsuario)

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Conectado na porta ${port}`)
})
