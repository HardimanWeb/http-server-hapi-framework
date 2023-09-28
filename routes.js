const routes = [{
    method : 'GET',
    path : '/',
    handler : (request, h) => {
        return 'ini adalah Homepage';
    }
   },
    {
    method : '*',
    path : '/',
    handler : (request, h) => {
        return 'Halaman tidak dapat diakses dengan method tersebut';
    }   
},
{
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
        return 'About page';
    },
},
{
    method: '*',
    path: '/about',
    handler: (request, h) => {
        return 'Halaman tidak dapat diakses dengan method tersebut';
    },
},
{
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
        return h.response('Halaman tidak ditemukan').code(404);
    },
},
{
    method : 'GET',
    path : '/hello/{name?}',
    handler: (request, h) => {
        const { name = "coders" } = request.params;
        const { lang, city } = request.query;
 
        if(lang === 'fr') {
            return `Bonjour, ${name}!`;
        }
        if(city === 'paris'){
            return `j'suis, ${city}!`;
        }
        return `Hello! ${ name} `;
    },
}
];

module.exports = {routes};