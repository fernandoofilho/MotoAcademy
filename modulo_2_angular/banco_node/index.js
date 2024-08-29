const express = require('express')
const userRoutes = require('./routes/userRoutes')
const fileRoutes = require('./routes/fileRoutes')
const app = express();

port = 3000;
app.use(express.json());
app.use("/api", [userRoutes, fileRoutes]);

app.listen(port, ()=>{
    console.log(`server listen on ${port}`);
})
