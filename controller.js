// routes.js
const express = require('express');
const app = express();
const { getProducts } = require('./mongoConection.js')
const mongoConection = require('./mongoConection.js')

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

module.exports = router;