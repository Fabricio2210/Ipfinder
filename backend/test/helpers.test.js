const expect = require("chai").expect;
const mock = require("./mock");
const urlParser = require("../helpers/urlParser");
const verifyProtocol = require("../helpers/VerifyProtocol");
const ipLocationApi =  require("../helpers/ipLocationApi");
const dnsLookup = require("../helpers/dnsLookup");

describe("test helpers", async () => {
  it("Should test url Parser", () => {
    let url = "https://ipfinder.netlify.app/";
    const resultUrlParser = urlParser(url);
    expect(resultUrlParser.hostname).equal(mock.urlParserMock(url).hostname);
  });
  it("Should test url protocol", () => {
    let url = "https://ipfinder.netlify.app/";
    const host = urlParser(url);
    const resultVerifyProtocol = verifyProtocol(host,url)
    expect(resultVerifyProtocol).equal(mock.verifyProtocolMock(host,url))
  });
  it("Should return object with the location adress info", async () =>{
    let res = {};
    let resp = '172.217.29.78';
    const resultIpLocationApi = ipLocationApi(resp,res)
    expect(resultIpLocationApi).equal(mock.ipLocationApiMock(resp,res))
  })
  it("Should return ")
});
