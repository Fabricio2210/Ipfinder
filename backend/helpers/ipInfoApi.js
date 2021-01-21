const get_ip = require("ipware")().get_ip;

const ipInfoApi = async (req) => {
  let ip_info = get_ip(req);
  return ip_info;
};

module.exports = ipInfoApi;
