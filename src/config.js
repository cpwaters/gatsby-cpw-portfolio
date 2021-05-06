import express from 'express';
import mongoose from 'mongoose';
import dbCreds from '../public/dbcreds';

const app = express({ dbCreds });
mongoose.connect('mongodb+srv://'+ dbCreds.db_user +':'+ dbCreds.db_pass +'@cluster0.gxswc.mongodb.net/'+ dbCreds.db_name +'?retryWrites=true&w=majority' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})