import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

import mongodb_connect_module from './modules/mongodbConnectModule';
const database = mongodb_connect_module.connect();

const port = 8080;
app.listen(port, () => console.log(`Server listening on port ${port}`));

