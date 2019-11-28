const url = require('url')
const iplocation = require("iplocation").default;
const dns = require('dns');
const router = require('express').Router();
const get_ip = require('ipware')().get_ip;
const geoip = require('geoip-lite');

router.get('/ipusuario', (req,res)=>{
    let ip_info = get_ip(req);
    const geo = geoip.lookup(ip_info);
     console.log(geo);
    dns.lookup(`${ip_info.clientIp}`, (err,resp) => {
        iplocation(`${resp}`,[])
        .then((endereco)=>{
            res.status(200).json({
                endereco:{
                    ip: endereco.ip,
                    pais: endereco.country,
                    estado: endereco.region,
                    cidade: endereco.city,
                    lat: endereco.latitude,
                    long: endereco.longitude
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
router.get('/',(req,res)=>{
    res.send('<h1>TESTE</h1>')
  });

module.exports = router;