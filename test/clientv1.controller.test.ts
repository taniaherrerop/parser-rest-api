
var chai = require('chai');

 
import  ClientV1Controller from "../src/controllers/clientv1.controller";
import Body from '../src/interfaces/body.interface';
import Clientdata from '../src/interfaces/clientdata.interface';


const expect = chai.expect;

 
describe('POST api/v1/parse', () => {
    
    var data : Body= {data: "JOHN0000MICHAEL0009994567"};
    var res : Clientdata= {
        firstName: "JOHN0000",
        lastName:"MICHAEL000",
        cientId:"9994567"
    };

    var client = new ClientV1Controller();
    it('parse', function() {
        let result = client.parse(data);
        expect(result.firstName).equal(res.firstName);
        expect(result.lastName).equal(res.lastName);
        expect(result.cientId).equal(res.cientId);
      });
    
  
  });

 