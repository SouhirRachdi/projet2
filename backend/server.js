const express=require ('express');

const cors=require('cors');
const app= express();

require("dotenv").config();
app.use(express.json());
app.use(cors())
app.use("/uploads", express.static(__dirname + "/uploads"));

const user=require("./Routes/userRoutes");
const cour=require("./Routes/courRoutes");
const library=require("./Routes/libraryRoutes");
const post=require("./Routes/postRoutes");
const connectDb=require("./config/connectdb")
connectDb()
//Routes

app.use("/user",user)
app.use("/cour",cour)
app.use("/library", library)
app.use("/post",post)


  
const port=process.env.PORT||5000
app.listen(5000,(err)=>{
err?console.log(err):console.log(`server is run http://localhost:${port}`)
 })