import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
const _cors = cors();
app.use(_cors);
app.use(express.json());
app.use(routes);

app.listen(3333);