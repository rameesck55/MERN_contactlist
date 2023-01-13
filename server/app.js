const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser')

const app=express();
app.set('view engine','ejs')
app.set('views','./src/views')
app.use(cors())
app.use(express.static('./public'))
app.use(bodyParser.json())

const contactrouter=require('./src/routes/contactrouter')



app.use('/contact',contactrouter)



app.use(express.json())
app.use(express.urlencoded({extended:true}))  // post data
// to access the dB
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });








app.listen(3000,()=>{
    console.log("server is at http://localhost:3000 ")
})