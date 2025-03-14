const { MongoClient } = require('mongodb');

const mongoURI = "mongodb+srv://drenviochallenge:m1jWly3uw42cBwp6@drenviochallenge.2efc0.mongodb.net/";

const client = new MongoClient(mongoURI);

async function connectToDatabase() {
  try {
    console.log("****************************************");

    await client.connect();
    console.log("Conexión a la base de datos exitosa");
    const db = client.db('tienda');
    return db;
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
    throw error;
  }
}

async function getProducts() {
  try {
    const db = await connectToDatabase();
    const products = await db.collection('products').find({}).toArray();
    return products;
  } catch (error) {
    console.error("Error al consultar datos:", error);
    throw error;
  }
}

module.exports = {
  getProducts
};