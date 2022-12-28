import express , { Application } from 'express';
import mainRoute from './api';
import dotenv from 'dotenv';

dotenv.config()
const app:Application = express();
const port = process.env.PORT || 4000;

app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.get('/' , (req,res)=>{
    res.sendStatus(200);
});
app.use(mainRoute);


app.listen(port , ()=>{
    console.clear()
    console.log('app runing on port ' , port)
});