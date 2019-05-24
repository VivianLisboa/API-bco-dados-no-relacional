let express = require ('express')

let app = express ();

var port  = process.env.PORT||8080;

app.get ('/',(req,res)=> res.send('Hello world with Express'));

app.listen(port,function(){
    console.log("Running RestHub on port " + port);
    })
