const functions = require("firebase-functions");
const cors = require('cors')({origin: true});
const request = require('request');
const qs = require('querystring')

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.searchNaverNews = functions.https.onRequest(async(req, response) => {
  functions.logger.info("load news logs!", {structuredData: true});
  // const newsUri = `https://openapi.naver.com/v1/search/news.json?query=${encodeURI('한화테크윈')}`;
  const headers = {
     Accept: '*/*',
     Host: 'openapi.naver.com',
    'Content-Type': 'application/json',
    'X-Naver-Client-Id': 'KL_voGl4mUMj5fcePnc3',
    'X-Naver-Client-Secret': 'IaPXGZ_j9D',
  };

  const data = response.req.body.data;
  // console.log('Query Params:', response.req.body.query);
  // console.log('Query Params:', req);
  // console.log('### query    :', args)
  // const { query, display, start, sort } = response.req.body.data;
  // console.log(query, display, start, sort);

  var options = {
    url : `https://openapi.naver.com/v1/search/news.json?query=${qs.escape('한화테크윈')}&display=${100}`,
    method:'GET',
    headers: headers,
  };

  cors(req, response, () => {
    request(options, function (error, res, body) {
      // console.log(res, error, body)
      response.send({
        status: 'success',
        data: body
      });
    });
  })
  // response.send("Hello from Firebase!");
});
