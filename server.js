const express = require('express')
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const server = require('./src/backend/divisores.server')
const swaggerFile = require('./swagger/swagger_output.json');

const port = process.env.PORT || 3001
const app = express()

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', server)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.get('*', (req, res) => {
    res.send('Route not found')
})

if (require.main === module){
    app.listen(port, () => {console.log('Servidor rodando')})
}

module.exports = {app}
