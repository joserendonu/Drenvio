// routes.js
const express = require('express');
const app = express();
app.use(express.json())
const { getProducts } = require('./mongoConection.js')
const { postProduct } = require('./mongoConection.js')
// const mongoConection = require('./mongoConection.js')

const router = express.Router();
port = 3000;  // Puerto donde escuchará el servidor

app.use('/', router);  // Usa el enrutador en la ruta raíz

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


router.get('/products', async (req, res) => {
    try {
      const products = await getProducts();
      resp = res.json(products); // Devuelve los productos como JSON
      console.log("***************************************************")
      console.log(resp);
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        res.status(500).json({ message: "Error al obtener los productos" });
    }
});

// Después definimos el método POST /products
router.post('/prod', async (req, res) => {
  try {
    console.log("***************************************************")
    console.log(req.body) // Para verificar el body del request.
    const newProduct = new Product(req.body); // Creamos un nuevo documento del modelo Product.
    const savedProduct = await newProduct.save(); // Guardamos el producto en la base de datos.
    res.status(201).json({ message: "Producto creado exitosamente", product: savedProduct}); // Respuesta exitosa.
  } catch (error) {
      console.error("Error al crear el producto:", error);
      res.status(500).json({message: "Error al crear el producto" }); // Respuesta con error.
  }
});


module.exports = router;