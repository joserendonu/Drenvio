# Drenvio
MongoDBNodeReact

EL ARCHIVO controller.js es el que expone las apis
node controller.js (PARA EJECUTAR EL BACKEND)


Para conectarse a la base de datos
mongodb+srv://drenviochallenge:m1jWly3uw42cBwp6@dr
enviochallenge.2efc0.mongodb.net/

Se elije react con javascript debido a que las librerías, proyectos, conocimientos, etc que conozco con de react con javascript a pesar de que sé que con typescript se maneja POO se que al final ts se basa en js y que ts esencialmente añade tipos estáticos y objetos basados lo que es ventaja en muchos casos pero se abstrae bastante a comparación de js, y el encapsulamiento serviría en sistemas más complejos donde en esta practica no se requiere a un nivel tan avanzado.

Se usa postman para el consumo de las apis:

OBTENER PRODUCTOS:
GET
http://localhost:3000/products

CREAR UN NUEVO PRODUCTO 
POST
http://localhost:3000/prod
Body
{
"name": "arroz",
"description": "zxcvzx qwerxcvzxcvzwer de zxcvzxcv opio",
"price": 18000,
"stock": true,
"imageUrl": "1740602834007-Screenshot-2025-02-04-093613.png",
"createdAt": "2025-02-20T00:55:56.097+00:00",
"updatedAt": "2025-02-26T20:47:23.758+00:00",
"basePrice": 15,
"brand": "xcvzzxcvzxvc",
"inStock": true,
"sku": "4564365435646"
}

ACTUALIZAR UN PRODUCTO EXISTENTE
POST
http://localhost:3000/updp/67d5bcb37c093abae2fa7c60
EL FINAL DE LA URL ES EL _id
{
"name": "fffffffddddeeeeeeeeeeddddddfffggghhhhhhhhhhhhhhhhhhhhhhd",
"description": "asdfasfd fresca de ipoiopi opio",
"price": 18000,
"stock": true,
"imageUrl": "1740602834007-Screenshot-2025-02-04-093613.png",
"createdAt": "2025-02-20T00:55:56.097+00:00",
"updatedAt": "2025-02-26T20:47:23.758+00:00",
"basePrice": 15,
"brand": "asdfasdfsd",
"inStock": true,
"sku": "2121sssasdfadsf"
}

BORAR UN PRODUCTO
DELETE
http://localhost:3000/delet/67d5bcb37c093abae2fa7c60

