const router = require('express').Router();
const ipInfoApi = require("../helpers/ipInfoApi");
const dnsLookup = require("../helpers/dnsLookup")
const ipLocationApi = require("../helpers/ipLocationApi")

router.get('/ipusuario', async (req,res)=>{
    let ip_info = await ipInfoApi(req);
    dnsLookup(ip_info.clientIp,ipLocationApi,res)

});
router.get('/',(req,res)=>{
    res.send('<h1>TESTE</h1>')
  });

module.exports = router;