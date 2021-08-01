export class GoogleObj {
    q: string[];
    source: string
    target: string
    format?: string
    
    constructor(q:string[],source:string, target:string ) {
      this.q = q;
      this.source = source
      this.target =target;
    }
}

