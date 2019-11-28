const url = require('url')
const iplocation = require("iplocation").default;
const dns = require('dns');
const router = require('express').Router();

router.post('/iplocation', (req,res)=>{
    const host = url.parse(req.body.url,true)
    let parseHost;
    if(req.body.url.charAt(0) ==='h'){
        parseHost = host.host
    }else if(req.body.url.charAt(1) ==='w'){
        parseHost = host.pathname
    }else{
        parseHost = `www.${host.path}`
    }
    dns.lookup(`${parseHost}`, (err,resp) => {
        if(resp === undefined){
            res.status(500).json({
                msg:'Url inválida'
            })
        }
        iplocation(`${resp}`,[])
        .then((endereco)=>{
            console.log(endereco)
            res.status(200).json({
                endereco:{
                    ip: endereco.ip,
                    pais: endereco.country,
                    estado: endereco.region,
                    cidade: endereco.city
                }
                
            })
        })
        .catch((erro)=>{
            res.status(500).json({
                msg: "erro no servidor"
            })
        })
    });
});

module.exports = router;