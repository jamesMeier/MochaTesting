const mongoose = require('mongoose');

//database name, will create if doesn't exist 
mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
    .once('open', () => console.log('good to go'))
    .on('error', (error) => {
        console.warn('Wrror', error);
    });