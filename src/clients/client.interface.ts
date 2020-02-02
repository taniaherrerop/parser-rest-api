import Body from './body.interface';
import Clientdata from './clientdata.interface';

interface Client {

  clientdata:Clientdata;

  parse(data:Body):any;
  intializeRoutes(): any;
  
}

export default Client;
