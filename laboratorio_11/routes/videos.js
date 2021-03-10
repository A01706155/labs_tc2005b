const express = require('express');

const router = express.Router();

const path = require('path');

router.get('/', (request, response, next) => {
    response.send('<h1>Videos</h1><p><a href="https://youtu.be/ChWVy-mkCNQ"><h2>What is Friday Night Funkin?</h2></a><p><a href="https://youtu.be/vkJzu9ZCBSw?t=30"><h2>FNF Walkthrough by VSauce</h2><p> <a href="/">Volver</a>'); 
});

module.exports = router;