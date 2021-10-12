const request = require("request");
const geo = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiYXNpZnVsIiwiYSI6ImNrdDcybG95eDBvYTQydW1oYjRnZGs1YWMifQ.Vrwvno_iPanbUipfg36qsg";
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("cant connect to services", undefined);
    } else if (body.features.length === 0) {
      callback("cant find location", undefined);
    } else {
      callback(undefined, {
        place: body.features[0].place_name,
        lat: body.features[0].center[0],
        long: body.features[0].center[1],
      });
    }
  });
};
module.exports = geo;
