const express = require('express');
const routes = require('./app/routes/index.js');

const app = express();
// app.get('/', (req,res)=>{
//     res.send('Hello World');
// })
app.use('/api', routes);

app.listen(8000, ()=>{
    console.log('Server is running on port 8000');
})