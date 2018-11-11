let express = require('express');

let app = express();

const port = process.env.port || 3000

app.get('/', (req, res) => {
    return res.send("DAT");
})

app.listen(port, () => {
    console.log('App listening on port ' + port);
})