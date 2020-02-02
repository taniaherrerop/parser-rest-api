import * as bodyParser from 'body-parser';
import * as express from 'express';

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers, port) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }

  private initializeControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.get("/", (req, res, next) => {
        res.send("Typescript App works!!");
      });

      this.app.use('/api', controller.router);
      
      this.app.get("*", (req, res, next) => {
        res.send("Make sure url is correct!!!");
      });
    });
  }
}

export default App;
