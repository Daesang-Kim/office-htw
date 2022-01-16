const functions = require("firebase-functions");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

const getNewsAPI = async (url, options) => {
  xhr.onreadystatechange = function() {
    // console.log("State: " + this.readyState);
    
    if (this.readyState === 4) {
      // console.log("Complete.\nBody length: " + this.responseText.length);
      // console.log("Body:\n" + this.responseText);
    }
  };
  xhr.open("GET", url);
  xhr.send();
  // const response = await xhr.(url, options);
  // const json = await response.json();
  return json;
}

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest(async(request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  const newsUri = 'https://openapi.naver.com/v1/search/news.json';
  
  response.send("Hello from Firebase!", await getNewsAPI(newsUri));
});
