import type {Router, Request, Response} from 'express';
import express from 'express'

import type {pets as petTypes} from '../db/pets'
import {pets} from '../db/pets'
import { getPets, getPetById } from '../Controllers/pets.contoller';



export const petsRouter:Router = express.Router();


petsRouter.get('/all', getPets);
petsRouter.get('/:id', getPetById);