const {PORT} = require('./config.js');
const express = require('express');
const cors = require('cors')
const {routes} = require('./routes/index')
const app = express();
const db = require('./db.js')

app.use(cors())
app.use(express.json());

app.get('/', (req, res)=>{
    res.json({
        message:"Server is working fine!",
        group:"This is Group 3 ...."
    })
})
app.use('/auth', routes);

// const port = {PORT};
app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
})