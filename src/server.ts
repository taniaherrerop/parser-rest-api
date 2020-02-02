import App from './app';
import ClientV1Controller from './clients/clientv1.controller';
import ClientV2Controller from './clients/clientv2.controller';

const app = new App(
  [
    new ClientV1Controller(),
    new ClientV2Controller(),
  ],
  5000,
);

app.listen();
