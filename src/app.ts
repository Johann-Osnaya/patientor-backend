import express from 'express';
const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());

export default app;