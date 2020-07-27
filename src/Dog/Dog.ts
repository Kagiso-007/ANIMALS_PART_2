import { Animal } from '../Animal/Animal';

export class Dog extends Animal{
    sound():string{
        return "Bark!!"
    }
}