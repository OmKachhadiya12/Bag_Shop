const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const path = require('path');

const db = require('./config/db');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.use('/owners',ownerRoutes);
app.use('/users',userRoutes);
app.use('/products',productRoutes);

app.listen(3000,() => {
    console.log('Listening on Port-3000');
})