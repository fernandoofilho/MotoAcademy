const express = require('express')
const userRoutes = require('./routes/userRoutes')
const app = express();

port = 3000;
app.use(express.json());
app.use('/api', userRoutes);

app.listen(port, ()=>{
    console.log(`server listen on ${port}`);
})
