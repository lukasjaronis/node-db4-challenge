const server = require('./server.js');

const port = 20000;

server.listen(port, () => {
    console.log(`Server is ONLINE at ${port}`)
});

