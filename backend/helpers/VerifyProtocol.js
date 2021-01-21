const verifyProtocol = (host, url) => {
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

module.exports = verifyProtocol;
