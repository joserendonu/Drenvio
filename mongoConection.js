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

async function postProduct(req, res) {
  console.log("***************************************************")

  try {
    const db = await connectToDatabase();
    const product = req;
    console.log("***************************************************")
    console.log(product)
    const result = await db.collection('products').insertOne(product);
    return res.status(201).json({ message: 'Producto creado' });
  } catch (error) {
    console.error('Error al crear el producto', error);
    return res.status(500).json({ message: 'Error al crear el producto', error });
  }
}
module.exports = {
  getProducts,
  connectToDatabase,
  postProduct
};