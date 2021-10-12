// console.log("starting");
// debugger
// setTimeout(() => {
//   console.log("timout");
// }, 1500);
// setTimeout(() => {
//   console.log("timout 2");
// }, 00);

// console.log("stoping");
// const sync = (title) => {
//   //asyn function inside a sync function so issue return undefined

//   setTimeout(() => {
//     return 1;
//   }, 2000);
// };
// const ans = sync();
// console.log(ans);

// const sync1 = (title, callback) => {
//   //asyn function inside so issue return undefined

//   setTimeout(() => {
//     // return 1;
//     callback(1);
//   }, 2000);
// };
// sync1("lalal", (data) => {
//   console.log(data);
// });
// console.log(ans);

// const url =
//   "http://api.weatherstack.com/current?access_key=61e5388daaf33318b61276f49d0d0d91&query=gaya&units=s";
// request({ url: url, json: true }, (error, data) => {
//   //    const datacity=JSON.parse( data.body)
//   if (error) {
//     console.log("unable to load services");
//   } else if (data.body.error) {
//     console.log("invalid query params");
//   } else console.log(data.body.current.temperature);
// });

const geo = require("./utilities/geoCode");
const foreCast = require("./utilities/foreCast");
const argvalue = process.argv[2];
if (argvalue) {
  geo(argvalue.toString(), (error, { lat, long, place }={}) => {
    if (error) console.log(error);
    else {
      foreCast(lat, long, (error, data1) => {
        if (error) return console.log(error);
        else {
          console.log(data1);
        }
      });
      console.log(place);
    }
  });
} else {
  console.log("no iput provided");
  return;
}
