const router = require("express").Router();
const urlParser = require("../helpers/urlParser");
const verifyProtocol = require("../helpers/VerifyProtocol");
const dnsLookup = require("../helpers/dnsLookup")
const locationApi = require("../helpers/ipLocationApi")

router.post("/iplocation", (req, res) => {
  const host = urlParser(req.body.url, true);
  let parseHost =  verifyProtocol(host,req.body.url)
  dnsLookup(parseHost,locationApi,res)
});

module.exports = router;
