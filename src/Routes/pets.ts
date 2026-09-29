import type {Router, Request, Response} from 'express';
import express from 'express'


import { getPets, getPetById } from '../Controllers/pets.contoller';

import { validateNumericID } from '../middlewares/pets.middlewares'
import{ pleaseAuth} from '../middlewares/pleaseauth'




export const petsRouter:Router = express.Router();


petsRouter.get('/all', getPets);
petsRouter.get('/:id',pleaseAuth,validateNumericID, getPetById);