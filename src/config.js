const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://cp-waters:20nialL05@cluster0.gxswc.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("sample_airbnb").collection("listingsAndReviews");
  // perform actions on the collection object
console.log(connections);
  client.close();
});




