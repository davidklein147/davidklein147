import { EmptyError } from "rxjs";

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

export class Lavels {
    sumLavels = 5;
    daysOfEachLavel = [1, 3, 7, 30, 90];

    constructor(sumLavels?: number) {
        this.sumLavels = sumLavels;

    }

    addLavel(sumDays: number): void {
        var value = this.daysOfEachLavel.find(elem => sumDays <= elem)
        if (value === sumDays) {
            throw new Error("this lavel alredy exists")
        } else {
            var index = this.daysOfEachLavel.indexOf(value)
            this.daysOfEachLavel.splice(index, 0, sumDays);
        }
    }

    chengeLavel(lavel: number, newDays: number){
        if(newDays > this.daysOfEachLavel[lavel-2] && newDays > this.daysOfEachLavel[lavel]){
            this.daysOfEachLavel[lavel-1] = newDays
        }else{
            throw new Error("the value od the days is wrong between the lavles")
        }
    }



}

class daysOfLavel {
    lavel: number;
    days: number;
}