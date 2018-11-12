const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');

const controller = require(__dirname + "/apps/controllers");
//body parser
app.use(bodyParser.json());

app.set('views',__dirname + "/apps/views");
app.set("view engine", "ejs");

app.use(controller);

const host = config.get('server.host');
const port = config.get('server.port');
app.listen(port, host, () => {
    console.log('App listening on port ' + port);
})