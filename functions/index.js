const functions = require("firebase-functions");
const cors = require('cors')({origin: true});
const request = require('request');
const qs = require('querystring')

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.helloWorld = functions.https.onRequest(async(req, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  // const newsUri = `https://openapi.naver.com/v1/search/news.json?query=${encodeURI('한화테크윈')}`;
  const headers = {
     Accept: '*/*',
     Host: 'openapi.naver.com',
    'Content-Type': 'application/json',
    'X-Naver-Client-Id': 'KL_voGl4mUMj5fcePnc3',
    'X-Naver-Client-Secret': 'IaPXGZ_j9D',
  };

  var options = {
    url : `https://openapi.naver.com/v1/search/news.json?query=${qs.escape('한화테크윈')}`,
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
