const cds = require('@sap/cds');
const multipart = require('connect-multiparty');

cds.on('bootstrap', app => {
    app.use(multipart());
});

module.exports = cds.server;
