const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 3, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};

const MONGO_USERNAME = 'dev-admin';
const MONGO_PASSWORD = 'FVcWmOnwKTUPZZWq';
const MONGO_HOSTNAME = 'mlps-maps.ylcih.gcp.mongodb.net';
// const MONGO_PORT = '27017';
const MONGO_DB = 'mlps-maps';
const MONGO_CONN_STR = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DB}?retryWrites=true&w=majority`

mongoose.connect(MONGO_CONN_STR, options).then(connection=> console.log(connection)).catch(err => console.log(err.reason));;


// const MongoClient = require('mongodb').MongoClient;
// const uri = MONGO_CONN_STR;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("mlps-maps").collection("maps");
//   // perform actions on the collection object
//   client.close();
// });


class User {
    
}