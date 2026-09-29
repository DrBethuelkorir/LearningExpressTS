import type {Request, Response} from 'express'

import type{pets as petTypes} from "../db/pets"
import {pets} from '../db/pets'
type QueryParams = {
    species?: string,
    adopted?: string
}
export const getPets = (req: Request<{}, unknown, {},QueryParams >, res: Response<petTypes[]>): void => {

  const {species, adopted} = req.query;
let filteredPets: pets[] =  pets;

  if (species) {
    filteredPets = filteredPets.filter((p: petTypes): boolean => 
        p.species.toLowerCase() === species.toString().toLowerCase());
  }
    if (adopted) {
    filteredPets = filteredPets.filter((p: petTypes): boolean => 
        p.adopted === JSON.parse(adopted));

  } 
  res.json(filteredPets)
};

export const getPetById = (req:Request<{id:string}>,res:Response<petTypes |{message : string}  >) => {
    const {id} = req.params;
    const pet: petTypes| undefined = pets.find((pet:petTypes):boolean =>pet.id === JSON.parse(id))

    if(pet){
        res.json(pet)
    }else{
        res.status(404).json({message:"pet not found"})
    }
}

