import { RepetitionData } from "./repetitionData";

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

