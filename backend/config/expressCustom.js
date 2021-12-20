const express = require('express');

const consign = require('consign');

module.exports = app => {
    
    app = express();

    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    
    consign().include('controllers').into(app);

    return app;
};