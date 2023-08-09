const express = require('express');

const server = express();

const port = 3001
server.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})