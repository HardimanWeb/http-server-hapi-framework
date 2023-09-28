const Hapi = require('@hapi/hapi');
const {routes} = require('./routes');

// struktur membuat server di hapi start
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });
    
    server.route(routes); //memangil route 

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}
 
init();
// end
