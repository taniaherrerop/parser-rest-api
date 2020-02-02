import App from './app';
import ClientV1Controller from './controllers/clientv1.controller';
import ClientV2Controller from './controllers/clientv2.controller';

const app = new App(
  [
    new ClientV1Controller(),
    new ClientV2Controller(),
  ],
  5000,
);

app.listen();
