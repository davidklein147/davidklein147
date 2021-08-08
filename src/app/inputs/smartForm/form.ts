import { Input } from "./input";

export class Form<T>{
    inputs: Input[];
    obj: object;

    constructor(obj: T) {
        this.inputs = [];
        this.takeObjectApart(obj);
        
    }

    takeObjectApart(obj: {}):void {
        for (const key in obj) {              
            for (const key2 in obj[key]) {
                let type = typeof (obj[key][key2])
                let input = new Input(key2, type)
                this.inputs.push(input);
            }          
            
        }
        
    }
}