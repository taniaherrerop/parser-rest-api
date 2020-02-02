import * as express from 'express';
import Client from '../interfaces/client.interface';
import Body from '../interfaces/body.interface';
import Clientdata from '../interfaces/clientdata.interface';

class ClientV1Controller  implements Client {
  public path = '/v1/parse';  
  public router = express.Router();

  
  clientdata :Clientdata ={
    firstName: "",
    lastName: "",
    cientId: "",
  };

  constructor() {
    this.intializeRoutes();
  }

  public parse(data:Body):any {
    console.log(`ClientV1Controller Received ${data.data}  `);
    this.clientdata.firstName=data.data.substring(0,8);
    this.clientdata.lastName=data.data.substring(8,18);
    this.clientdata.cientId=data.data.substring(18);
    return this.clientdata;
  }

  private intializeRoutes() {
    console.log(`in ClientV1Controller`);
    this.router.post(this.path, this.Post);
  }

  private Post = (request: express.Request, response: express.Response) => {
    const body: Body = request.body;
    this.parse(body); 
    var ret={
      statusCode:200,
      data:this.clientdata
    }
    response.send(ret);
  }
}

export default ClientV1Controller;
