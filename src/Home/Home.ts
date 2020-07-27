import { Animal } from '../Animal/Animal';

export class Home{
    pets:Animal[] =[];
    adoptPet(pet:Animal){
        this.pets.forEach(Adopted_pet =>{
                if(Adopted_pet == pet){
                    throw new Error('Pet: '+pet.name+' already adopted');
                }     
        })
        this.pets.push(pet);
    }

    makeAllSounds(){
        this.pets.forEach(pet => {
            console.log(pet.sound());
        });
    }
}