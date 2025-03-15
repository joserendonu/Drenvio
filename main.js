const { getProductByName,getProducts, getProductsByDescription, putProduct, delProduct} = require('./mongoConection'); // Importa las funciones de mongoConnection.js
const {ObjectId} = require('mongodb');

async function run() {
    try {
        body = {
            "name": "Testproduct",
            "description": "qwerqwerqwerwqrwqrwqr",
            "price": 10,
            "stock": true,
            "imageUrl": "1740602834007-Screenshot-2025-02-04-093613.png"
        }
        try {
            const descriptionToSearch = "Test";
            const productByDescription = await delProduct('67b67ec745f485b95e924ff3')
/*
            console.log("productByDescription", productByDescription);
*/

        } catch (error) {
            console.error("Error en la operación", error);
        }
        /*, body*/
        /*CORREGIRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR*/

    } catch (error) {
        console.error("Error en la operación", error);
    }

}




run();
