var request = require("request");

var options = { method: 'GET',
  url: 'http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getMsrstnList',
  qs:
   { addr: '%EC%84%9C%EC%9A%B8',
     stationName: '%EC%A2%85%EB%A1%9C%EA%B5%AC',
     pageNo: '1',
     numOfRows: '10',
     ServiceKey: '' },
  headers:
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'accept-encoding': 'gzip, deflate',
     cookie: 'JSESSIONID=adwk4B8RlM68S7PXiS77ecwX',
     Host: 'openapi.airkorea.or.kr,
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.11.0' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
