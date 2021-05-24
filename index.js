

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const body = require('body-parser');



// const methodOverride = require("method-override");
// const path = require('path');


app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.use(express.static('publik'));
app.use(body.urlencoded({extended:false}));



const nodeRouter = require("./routes/nodeRouter");
app.use("/node",nodeRouter);



server.listen(3010,function(){
	console.log("server listening port 3010");
});
