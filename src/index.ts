console.log('>>> FILE LOADED <<<');

import type {Express, Request, Response} from 'express';
import express from 'express';
import cors from 'cors';
import { petsRouter } from './Routes/pets';
import { pets } from './db/pets';
import  'dotenv/config'



const app: Express = express();
app.use(cors());

app.use('/pets', petsRouter)
app.use('/id',petsRouter)
app.use((req: Request, res: Response<{message: string}>): void => {
  res.status(404).json({ message: 'Endpoint not found' });
});

console.log('REGISTERED ROUTES:');

app.listen(3000, (): void => {
  console.log('Server is running on port 3000');
});