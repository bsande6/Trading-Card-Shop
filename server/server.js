const {MongoClient} = require('mongodb');

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');
const users = require('./routes/user');

require("dotenv").config({ path: "./config.env" });
uri = process.env.ATLAS_URI

mongoose.connect(uri)
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
    
//Routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.use(express.json());

app.use('/api/users', users);



app.get('/message', (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});

// async function main() {
//   require("dotenv").config({ path: "./config.env" });
//   uri = process.env.ATLAS_URI
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();

//     await listDatabases(client);

//   } catch (e) {
//     console.error(e);
//   }

//   finally {
//     await client.close();
//   }
// }

// main().catch(console.error);

// async function listDatabases(client){
//   databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };
