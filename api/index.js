const server = require("./src/app");
const {conn} = require("./src/db");

const port = 3001

server.listen(port, ()=>{
    conn.sync({alter:false});
    console.log(`listening on port ${port}`);
})