const express = require('express')
const connectDB = require('./config/db');
const signin=require('./routes/signin')
const CreateEvent=require('./routes/createevent')
const cors = require('cors');

const app = express()
const port = 5000

connectDB((err) => {
    if (err) {
      console.error('Failed to connect to the database');
    } else {
      console.log('Database connected successfully');
    }
  });
  
  app.use(cors({
    origin: 'http://localhost:3000'
  }));
  
app.use('/',signin);
app.use('/',CreateEvent);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))