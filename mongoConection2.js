const mongoose = require('mongoose');


const connectDB = async () => {
    console.log("asdfasdfsadfds")
    try {
        await mongoose.connect('mongodb+srv://drenviochallenge:m1jWly3uw42cBwp6@drenviochallenge.2efc0.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
};

module.exports = connectDB;