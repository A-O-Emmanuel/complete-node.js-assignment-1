const http = require('http');
const route = require('./routes');


const server = http.createServer(route);


const port = 5000;
server.listen(port, () => {
    console.log(`server running on port: ${port}`)
});





