const request = require("request");
const foreCast = (lat, long, callback) => {
  const url =
    " http://api.weatherstack.com/current?access_key=61e5388daaf33318b61276f49d0d0d91&query=" +
    encodeURIComponent(long + "," + lat) 
    ;
  request({  url, json: true }, (error, {body}) => {
    if (error) {
      callback("cant connect to services", undefined);
    } else if (body.error) {
      callback("cant find location", undefined);
    } else {
      callback(undefined,"tempatature is "+ body.current.temperature
       
      );
    }
  });
};
module.exports = foreCast;
