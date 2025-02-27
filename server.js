require('dotenv').config()


const express=require('express')
const connectToDB=require("./database/db");
const bookRoutes=require('./routes/bookroutes')

const app=express()
const PORT=process.env.PORT || 3000;
// conect to our database

connectToDB();

//middleware
app.use(express.json());

//routes here
app.use('/api/books',bookRoutes)


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)


})