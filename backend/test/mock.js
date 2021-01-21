const url = require("url");
const iplocation = require("iplocation").default;

const urlParserMock = (urlBody) => {
  const host = url.parse(urlBody, true);
  return host;
};
const verifyProtocolMock = (host, url) => {
    let parseHost;
    if (url.charAt(0) === "h") {
      parseHost = host.host;
    } else if (url.charAt(1) === "w") {
      parseHost = host.pathname;
    } else {
      parseHost = `www.${host.path}`;
    }
    return parseHost
  };

  const ipLocationApiMock = (resp,res) => {
    iplocation(`${resp}`, [])
      .then((endereco) => {
        res.status(200).json({
          endereco: {
            ip: endereco.ip,
            pais: endereco.country,
            estado: endereco.region,
            cidade: endereco.city,
          },
        });
      })
      .catch((erro) => {
        res.status(500).json({
          msg: `erro no servidor:${erro.message}`,
        });
      });
  };

 
module.exports = { urlParserMock, verifyProtocolMock, ipLocationApiMock }

