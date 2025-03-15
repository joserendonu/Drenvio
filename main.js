const { getProductByName,getProducts, getProductsByDescription} = require('./mongoConection'); // Importa las funciones de mongoConnection.js
const {ObjectId} = require('mongodb');

async function run() {
    try {
        body = {
            "name": "Pechuga de ooñiopiopiop",
            "description": "Pechuga fresca de ipoiopi opio",
            "price": 18000,
            "stock": 15,
            "category": "ioópoiuopuiop"
        }
        try {
            const descriptionToSearch = "Test";
            const productByDescription = await getProductByName('Testproduct')
            console.log("productByDescription", productByDescription);

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
