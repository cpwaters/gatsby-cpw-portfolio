import express from 'express';
import mongoose from 'mongoose';

const app = express();
mongoose.connect('mongodb+srv://DB_USER:DB_PASS@cluster0.gxswc.mongodb.net/DB_NAME?retryWrites=true&w=majority' , {
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