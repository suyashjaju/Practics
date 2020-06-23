var http = require('http');

function onRequest(request,response){
    response.writeHead(200,{'Content-type':'text/html'});
    response.write('Practics Blog');
    response.end(); 
}

 http.createServer(onRequest).listen(8000);