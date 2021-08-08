export class Input  {
    type: string;
    label: string;
    name: string;
    
        constructor(key: string, type:any) {      
        this.name = key;
        this.label = key;
        this.type = type == "number"? type: "text";

        // switch (type) {
        //     case 'number';
        //         this.type =type;
        //     default:
        //         this.type = 'text'
        //         break;
        // }      
    }
    s
}
