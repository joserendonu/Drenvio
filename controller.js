const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())
const {getProducts} = require('./mongoConection.js')
const {postProduct,putProduct} = require('./mongoConection.js')
const {getProductById, delProduct} = require("./mongoConection");
const router = express.Router();
port = 3000;  // Puerto donde escuchará el servidor
app.use('/', router);  // Usa el enrutador en la ruta raíz
{
    // Iniciar el servidor
    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });
    /*Testing connection*/
    router.get('/getData', async (req, res) => {
        try {
            const products = await getProducts();
            res.status(200).json({data: products})
            console.log('***************************************************');
        } catch (error) {
            console.error("Error al obtener los productos:", error);
            res.status(500).json({message: "Error al obtener los productos", error: error.message});
        }
    });
    router.get('/products', async (req, res) => {
        try {
            const products = await getProducts();
            resp = res.json(products); // Devuelve los productos como JSON
        } catch (error) {
            console.error("Error al obtener los productos:", error);
            res.status(500).json({message: "Error al obtener los productos"});
        }
    });
    router.post('/prod', async (req, res) => {
        try {
            const newProduct = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                stock: req.body.stock,
                category: req.body.category,
            };
            const savedProduct = await postProduct(req, res); // Guardamos el producto en la base de datos.
            /*res.status(201).json({message: "Producto creado exitosamente", product: savedProduct});*/
        } catch (error) {
            console.error("Error al crear el producto:", error);
            res.status(500).json({message: "Error al crear el producto"}); // Respuesta con error.
        }
    });
    router.put('/updp/:id', async (req, res) => {
        const id  = req.params.id;
        try {
            producto_actualizar = await putProduct(req, res,id)
            res.status(201).json({message: "Producto creado exitosamente"});
        } catch (error) {
            console.error("Error al crear el producto:", error);
            res.status(500).json({message: "Error al crear el producto"}); // Respuesta con error.
        }
    });
    router.delete('/delet/:id', async (req, res) => {
        const id  = req.params.id;
        try {
            producto_actualizar = await delProduct(id)
            res.status(201).json({message: "Producto borrado exitosamente"});
        } catch (error) {
            console.error("Error al borrar el producto:", error);
            res.status(500).json({message: "Error al borrar el producto"}); // Respuesta con error.
        }
    });


}


module.exports = router;