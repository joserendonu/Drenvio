const {MongoClient} = require('mongodb');
const {ObjectId} = require('mongodb');
const mongoURI = "mongodb+srv://drenviochallenge:m1jWly3uw42cBwp6@drenviochallenge.2efc0.mongodb.net/";
const mongoose = require("mongoose");
const {Product} = require("./product.model");

const client = new MongoClient(mongoURI);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Conexión a la base de datos exitosa");
        const db = client.db('test');
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
async function getProductByName(name) {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    console.log(name);
    try {
        const db = await connectToDatabase();

        // Aqui convertimos el ID a ObjectID
        const producto = await db.collection('products').findOne({ name:name });


        console.log("*******************");
        console.log(producto);
        return producto;
    } catch (error) {
        console.error('Error al consultar datos:', error);
        throw error;
    }
}
async function postProduct(req, res) {
    try {
        const db = await connectToDatabase();
        const product = req.body;
        const result = await db.collection('products').insertOne(product);
        return res.status(201).json({message: 'Producto creado'});
    } catch (error) {
        console.error('Error al crear el producto', error);
        return res.status(500).json({message: 'Error al crear el producto', error});
    }
}
async function putProduct(req, res) {
    try {
        const db = await connectToDatabase();
        const product = req;

        const producto = await db.collection('products').findOne({ name:product.name });
        console.log("********************************")
        console.log(producto)
        producto.name = product.name;
        producto.description = product.description;
        producto.price = product.price;
        producto.stock = product.stock;
        producto.imageUrl = product.imageUrl;

        const result = await db.collection('products').updateOne({ _id: producto._id }, {$set: producto});
/*
        const result = await db.collection('products').update(product);
*/
/*
        return res.status(201).json({message: 'Producto actualizado'});
*/
    } catch (error) {
        console.error('Error al crear el producto', error);
/*
        return res.status(500).json({message: 'Error al crear el producto', error});
*/
    }
}
// const { ProductModel } = require('./product.model')/*
// async function getProductByDescription(description){
//     console.log('**********************************');
//     console.log('Buscando producto por descripción...');
//
//     try {
//         const db = await connectToDatabase();
//
//         // Aqui vas a buscar el producto en la collecion 'products' usando la description
//         const products = await db.collection('products').find({ description: description }).exec();
// /!*
//         const products = await ProductModel.find({ description }).exec();
// *!/
//         console.log('**********************************');
//         console.log(products);
//
//         return products;
//
//     } catch (error) {
//         console.error('Error al consultar datos: ', error);
//         throw error;
//     }
// }*/
async function delProduct(id) {
    try {
        const db = await connectToDatabase();
        const producto = await db.collection('products').deleteOne({ _id: new ObjectId(id) });
    } catch (error) {
        console.error('Error al crear el producto', error);
        /*
                return res.status(500).json({message: 'Error al crear el producto', error});
        */
    }
}

module.exports = {
    getProducts,
    connectToDatabase,
    postProduct,
    putProduct,
    getProductByName,
    delProduct,
};