const dns = require("dns");

const dnsLookup = (parseHost, locationApi,res) => {
  dns.lookup(`${parseHost}`, (err, resp) => {
    if (resp === undefined) {
      res.status(500).json({
        msg: "Url inválida",
      });
    }
    locationApi(resp,res);
  });
};

module.exports = dnsLookup;
