const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./src/backend/divisores.server.js'];

swaggerAutogen(outputFile, endpointsFiles);