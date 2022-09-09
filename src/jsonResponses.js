const text = require('./textResponses.js');

const getHelloJSON = (request, response) => {
    const helloJSON ={
        message: text.hello,
    };
    const stringMessage = JSON.stringify(helloJSON);

    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(stringMessage);
    response.end();
}
const getTimeJson = (request, response) => {
    const timeJson = {
        time: text.getTimeString(),
    };
    const stringMessage = JSON.stringify(timeJson);

    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(stringMessage);
    response.end();
}
module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJson = getTimeJson;