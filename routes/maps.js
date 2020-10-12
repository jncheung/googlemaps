var express = require('express');
var router = express.Router();
const axios = require('axios')
const api = axios.create({
  baseURL: 'https://maps.googleapis.com',
})


const { check, oneOf, validationResult } = require('express-validator');

/* GET users listing. */

// https://roads.googleapis.com/v1/nearestRoads?parameters&key=AIzaSyDrBgnnXniH5H4XwlkeNPRRi_W375IHzuI
//AutoComplete https://maps.googleapis.com/maps/api/place/autocomplete/json?input=CHUNG KI HOUSE&key=AIzaSyDrBgnnXniH5H4XwlkeNPRRi_W375IHzuI&offset=3&language=zh-HK&components=country:HK
// FindPlaceFromText https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=AIzaSyDrBgnnXniH5H4XwlkeNPRRi_W375IHzuI&input=CHUNG KI HOUSE, TIN CHUNG COURT, 3 TIN WING ROAD, TIN SHUI WAI, YUEN LONG&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&channel=testing123
// Places Details https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=YOUR_API_KEY

// Geocoding https://maps.googleapis.com/maps/api/geocode/json?latlng=22.461233555750184,114.0&key=AIzaSyDrBgnnXniH5H4XwlkeNPRRi_W375IHzuI&language=jp
// POST Geolocation https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDrBgnnXniH5H4XwlkeNPRRi_W375IHzuI
// queryautocomplete https://maps.googleapis.com/maps/api/place/queryautocomplete/json?location=22.396427,114.109497&key=AIzaSyDrBgnnXniH5H4XwlkeNPRRi_W375IHzuI&language=zh_hk&radius=2500&input=Apartemen Vittoria Residence Jl. Daan Mogot No.Km. 13.8 9 3, RT.9/RW.3, Cengkareng Tim., Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11730, Indonesia
// Direction https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=YOUR_API_KEY
// DM https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626&key=YOUR_API_KEY
const v3js = null;

const apis = {

}

const v3mapjs = async (parameters) =>{
  // const resp =  await axios.get()
  const resp =  await api.get('/maps/api/js',{ params : parameters })
  // console.log(resp)
  return resp.data
}

// const v3mapjs = async (parameters) =>{
//   // const resp =  await axios.get()
//   const resp =  await api.get('/maps/api/js',{ params : parameters })
//   // console.log(resp)
//   return resp.data
// }

// xxx.yyy.zzz/json   // standard maps api
router.get('/api/:product/:endpoint?/:format?', check('key').custom(value =>{
  return
})
// router.get('/api/:product/:endpoint?/:format?', check('key').exists()
, async function(req, res, next) {

  
  try {
    validationResult(req).throw();
    console.log(req.params)
    if(req.params.product){} 
    // yay! we're good to start selling our skilled services :)))
 
  } catch (err) {
    // Oh noes. This user doesn't have enough skills for this...
    res.status(400).send(err)
  }


});

router.get('/js', async (req,res,next)=>{

  let rps = req.params
  let rqy = req.query
  if (rps.format === 'json') console.log(rps.format)
  if (rqy !== null) {
    try{
      res.type('.js');
      res.send(await v3mapjs(rqy))
    }catch (err){
      res.status(500).send(err)
    }
  } 

})

// apiKey = request.args.get('key')
// callback = request.args.get('callback')
// params = {'key' : apiKey, 'callback': callback }
// region = request.args.get('region')
// libraries = request.args.get('libraries')
// language = request.args.get('language')

module.exports = router;
