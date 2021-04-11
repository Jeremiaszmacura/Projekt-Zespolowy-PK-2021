const express = require('express');

const app = express(); // create app

const port = process.env.PORT || 3000;

//middleware
app.use(express.static('public')); // browser gets access to files in public directory
app.use(express.urlencoded( { extended: true })); // bierze cały url encoded data i parsuje to do object, który możemy używać na request object (req.body)


if(require.main === module) {
    app.listen(port, () => console.log(`[SERVER] listening on port ${port}...`)) // dopiero po połączenu z baza danych zaczynamy nasłuchiwanie
} else {
    module.exports = app
}