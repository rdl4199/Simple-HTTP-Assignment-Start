const http = require('http');
const htmlHandler = require('./htmlReponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    console.log(request.url);
    switch (request.url){
        case '/':
            htmlHandler.getIndex(request, response);
            break;
        case '/page2':
            htmlHandler.getPage2(request,response);
            break;
        case '/hello':
            textHandler.getHello(request, response);
            break;
        case '/time':
            textHandler.getTime(request,response);
            break;
        case '/helloJSON':
            jsonHandler.getHelloJSON(request,response);
            break;
        case '/timeJSON':
            jsonHandler.getTimeJson(request,response);
            break;
        default:
            htmlHandler.getIndex(request, response);
            break;
    }
}

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on 127.0.0..1:${port}`);
});



