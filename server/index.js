/**
 * https://github.com/senbagaraman04/rams-recruit
 */

const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;    
const bodyParser = require('body-parser');
const candidateListRoutes = require('./routes/candidatelist.routes');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
// enable cors
// app.options('*', (req, res) => {
//   res.set('Access-Control-Allow-Origin', '*');
//   res.send('ok');
// });

// app.use((req, res) => {
//   res.set('Access-Control-Allow-Origin', '*');
// });
 
 
  // parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use('/candidate', candidateListRoutes);

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
  //res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
  //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 

  res.json({ message: "Welcome to rams-recruit!" });
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});



 

