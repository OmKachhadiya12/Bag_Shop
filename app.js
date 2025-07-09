const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const ownerRoutes = require('./routes/ownerRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const index = require('./routes/index');
const expressSession = require('express-session');
const flash = require('connect-flash'); 

const db = require('./config/db');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.use(expressSession({
    resave: true,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET
}));

app.use(flash());

app.use('/',index);
app.use('/owners',ownerRoutes);
app.use('/users',userRoutes);
app.use('/products',productRoutes);

app.listen(3000,() => {
    console.log('Listening on Port-3000');
})