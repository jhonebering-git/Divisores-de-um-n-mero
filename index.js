const express = require('express');

const server = require('./src/backend/divisores.server');
const port = process.env.PORT || 3007;
const app = express();

app.use('/', server);

app.get('*', (req, res) => {
    res.send('Route not found');
});

if (require.main === module){
    app.listen(port, () => {console.log('Servidor rodando')});
}

module.exports = {app};