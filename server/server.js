const {MongoClient} = require('mongodb');

// const express = require("express");
// const app = express();
// const cors = require("cors");

  async function main() {
  require("dotenv").config({ path: "./config.env" });
  uri = process.env.ATLAS_URI
  const client = new MongoClient(uri);

  try {
    await client.connect();

    await listDatabases(client);

  } catch (e) {
    console.error(e);
  }

  finally {
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
