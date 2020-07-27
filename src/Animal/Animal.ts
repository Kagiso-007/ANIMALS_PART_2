export class Animal{
    name: string
    constructor(name:string){
        this.name = name
    }
    eats():string{
        return "Food!!"
    }
    sound():string{
        return this.name + "Sound..."
    }
}