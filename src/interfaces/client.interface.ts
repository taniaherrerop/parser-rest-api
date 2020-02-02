import Body from './body.interface';
import Clientdata from './clientdata.interface';

interface Client {

  clientdata:Clientdata;

  parse(data:Body):any;
   
  
}

export default Client;
