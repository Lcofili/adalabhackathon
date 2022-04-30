const mongoose = require('mongoose');
port = 2000
url = 'mongodb://localhost:27017/'

mongoose.connect(url).then(() =>{
    console.log('Actively on Server');
}).catch((err) =>{
    console.log('Database Shutting Down');
});