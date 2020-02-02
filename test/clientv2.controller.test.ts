
var chai = require('chai');
 
  
import  ClientV2Controller from "../src/controllers/clientv2.controller";
import Body from '../src/interfaces/body.interface';
import Clientdata from '../src/interfaces/clientdata.interface';

 
const expect = chai.expect;

 
describe('POST api/v2/parse', () => {
    
    var data : Body= {data: "JOHN0000MICHAEL0009994567"};
    var res : Clientdata= {
        firstName: "JOHN",
        lastName:"MICHAEL",
        cientId:"999-4567"
    };

    var client = new ClientV2Controller();
    it('parse', function() {
        let result = client.parse(data);
        expect(result.firstName).equal(res.firstName);
        expect(result.lastName).equal(res.lastName);
        expect(result.cientId).equal(res.cientId);
      });
    
  
  });

 