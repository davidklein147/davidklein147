export class InputWord {
    sourceWord: SourceWord;
    translateWord: TranslateWord;
    repetitionData?: RepetitionData

    constructor(userId: number, isWithRepetition?: boolean) {
        this.sourceWord = new SourceWord(userId);
        this.translateWord = new TranslateWord();
        this.repetitionData = isWithRepetition ? new RepetitionData() : null;
    }

}

export class SourceWord {
    userId?: number;
    sourceWord: string;
    sourceLang?: number;
    //isMemberInGroup?: boolean;

    constructor(userId: number) {
        this.userId = userId;
        this.sourceWord = "";
        this.sourceLang = 0;
        //this.isMemberInGroup = null;
    }
}

export class TranslateWord {

    translateWord: string;
    translateLang?: number;
    private creationDate: string;
    partOfSpeech: string;

    constructor() {

        this.translateWord = "";
        this.translateLang = 0;
        this.creationDate = null;
        this.partOfSpeech = "";
    }

    public getCreationDate(): string {
        return this.creationDate;
    }

    public setCreationDate(date: Date): void {
        this.creationDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
    }
}

export class RepetitionData {
    TranslateWord: number;
    type: number;
    private lavel: number;
    score: number;
    private repetitionDate: string;

    constructor(translateWord?: number) {
        this.TranslateWord = translateWord | 0;
        this.type = null;
        this.lavel = 1;
        this.score = null;
    }



    public getLavel(): number {
        return this.lavel;
    }
    public setLavel(lavel: number): void {
        this.lavel = this.lavel + lavel <= 1 ? 1 : this.lavel + lavel;
    }



    public getRepetitionDate(): string {
        return this.repetitionDate;
    }
    public setRepetitionDate(date: Date): void {
        this.repetitionDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
    }

    
}