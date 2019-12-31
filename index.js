const express = require('express');
const app = express();
const cors = require('cors') 
const port = process.env.PORT || 5000;
const employeeRoute = require('./routes/employee')


app.use(cors())
app.use(express.json())

app.use('/employees',employeeRoute)



app.listen(port);



