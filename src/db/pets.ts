export type pets = {
    id: number;
    name: string;
    age: number;
    breed: string;
    sex: string;
    species: string;
    adopted: boolean
}
export const pets: pets[] = [
    {
        id: 1,
        name: 'Buddy',
        age: 3,
        breed: 'Golden Retriever',
        sex: 'Male',
        species: 'Dog',
        adopted: false
    },  
{
        id: 2,
        name: 'Luna',
        age: 2,
        breed: 'Siberian Husky',
        sex: 'Female',
        species: 'Dog',
        adopted: true
    },
    {
        id: 3,
        name: 'Whiskers',
        age: 1,
        breed: 'Maine Coon',
        sex: 'Male',
        species: 'Cat',
        adopted: true
    }
]