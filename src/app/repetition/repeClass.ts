export class SingleWord {
    CreationDate: Date;
    Lavel: number;
    PartOfSpeech: string;
    RepetitionDate: Date;
    SourceWord: string;
    TranslateWord: string;
    TranslateWordId: number
    Type: string;
    isRepeatd: boolean;

    constructor(list: DailyList) {
        console.log(list);
        
        this.CreationDate = new Date(list.CreationDate);
        this.Lavel = list.Lavel;
        this.PartOfSpeech = list.PartOfSpeech;
        this.RepetitionDate = new Date(list.RepetitionDate)
        this.SourceWord = list.SourceWord;
        this.TranslateWord = list.TranslateWord;
        this.TranslateWordId = list.TranslateWordId;
        this.Type = list.Type;
        this.isRepeatd = list.isRepeatd? list.isRepeatd: false;
    }

    getDateFormat(date: Date): string {
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }
}

export interface DailyList {
    CreationDate: string;
    Lavel: number;
    PartOfSpeech: string;
    RepetitionDate: string
    SourceWord: string;
    TranslateWord: string;
    TranslateWordId: number
    Type: string;
    isRepeatd?: boolean;
}