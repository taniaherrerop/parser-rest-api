import * as express from 'express';
import Client from '../interfaces/client.interface';
import Body from '../interfaces/body.interface';
import Clientdata from '../interfaces/clientdata.interface';

class ClientV2Controller  implements Client {
  public path = '/v2/parse';  
  public router = express.Router();

  clientdata :Clientdata ={
    firstName: "",
    lastName: "",
    cientId: "",
  };

  constructor() {
    this.intializeRoutes();
  }

  public parse(data:Body) {
    console.log(`ClientV2Controller received ${data.data}  `);
    this.clientdata.firstName=data.data.substring(0,8).replace(/0|1|2|3|4|5|6|7|8|9/g,'');
    this.clientdata.lastName=data.data.substring(8,18).replace(/0|1|2|3|4|5|6|7|8|9/g,'');
    var cientId=data.data.substring(18);
    this.clientdata.cientId=cientId.substring(0,3)+"-"+cientId.substring(3);
    return this.clientdata;
  }

  private intializeRoutes() {
    console.log(`in ClientV2Controller`);
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

export default ClientV2Controller;
