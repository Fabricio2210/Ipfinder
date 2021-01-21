const url = require("url");

const urlParser = (urlBody) => {
  const host = url.parse(urlBody, true);
  return host;
};
module.exports = urlParser;
