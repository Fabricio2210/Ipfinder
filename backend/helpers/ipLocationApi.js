const iplocation = require("iplocation").default;

const locationApi = (resp,res) => {
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

module.exports = locationApi;
