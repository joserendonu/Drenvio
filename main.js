

const { getProducts, getProductById, updateProduct} = require('./mongoConection'); // Importa las funciones de mongoConnection.js

async function run() {
    // Llamada a getProducts
    try {
        const products = await getProducts();
        console.log("Productos:", products);
        const product = await getProductById('65827088420ff5523d9498a7')
        console.log("Producto por id:", product)
        // Ejemplo de updateProduct
        // No puedes hacer una solicitud POST desde aquí, necesitarías un servidor http con express
    } catch (error) {
        console.error("Error en la operación", error);
    }
    /*const book1 = new Book(
        "Harry Potter y el cáliz de lospioplopio",
        "asdaasdsadas",
        "2019-12-05",
        "ad644"
    );
    const book2 = new Book(
        "Harry Potter y el cáliz de fuego",
        "J.K.Rowling",
        "2023-11-04",
        "isbn2"
    );


    console.log("Libro 1:", book1);
    console.log("Libro 2:", book2);*/

}

run();
