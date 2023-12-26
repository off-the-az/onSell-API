import express, {Request, Response} from 'express';
import * as bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());

const start = async () => {
    try{
        app.get('/', async (req : Request, res : Response) => {
          res.status(200).send({"status": "Success"}); 
      });
        app.listen(process.env.PORT, () => {
            console.log("Server start - http://localhost:" + process.env.PORT);
        });
    }
    catch(e){
        console.log(e);
    }
}

start();