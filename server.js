const express = require('express');
const path = require('path');


const app = express();

app.use(express.static(__dirname + '/dist/rams-recruitment'));

// Link index.html of build folder with router.
app.get('/*', (req,res,next) => {
    res.sendFile(path.join(__dirname + '/dist/rams-recruitment/index.html'));
});


app.listen(process.env.PORT || 8000);