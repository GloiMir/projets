var app = require('express')();
var cors = require('cors');
var {Client} = require('pg');

var client = new Client({
    host: "localhost",
    user:"postgres",
    port: 5432,
    password: "MIRINDI",
    database: "song"
});

client.connect();

app.use(cors());

// app.put("/:chorale",(req,res)=>{
//     let kwaya = req.params.chorale
//     // client.query("SELECT * FROM "+kwaya+"ORDER BY titre",(err,response)=>{
//     //     res.send(response.rows)
//     // })
//     console.log(kwaya)
// })
app.put("/accueil/:chorale",(req,res)=>{
    let kwaya = req.params.chorale
    client.query("SELECT * FROM "+kwaya+" ORDER BY titre",(err,response)=>{

        res.send(response.rows)
        // console.log(response.rows)
    })
    // console.log(kwaya)
})
app.listen(8080,()=>console.log("Le serveur est en marche sans probleme"))