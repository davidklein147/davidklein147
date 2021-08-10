export class RepetitionData {

    TranslateWord: number;
    type: number;
    private lavel: number;
    score: number;
    private repetitionDate: string;
    lavels: Lavels;

    constructor(translateWord?: number, type?: number, lavels?: Lavels) {
        this.TranslateWord = translateWord || 0;
        this.type = type || null;
        this.lavel = 1;
        this.score = null;
        this.lavels = lavels ? lavels : new Lavels();
        //this.setDateByLavel();
    }



    public getLavel(): number {
        return this.lavel;
    }
    //need to ensure that @parem oldLavel and @param scroe are correct
    public setLavel(oldLavel: number, score: number): void {
        if (this.lavel == this.lavels.sumLavels) {
            this.lavel = oldLavel
        } else if ((oldLavel > 0 && oldLavel <= this.lavels.sumLavels) &&
            (score > 0 && score >= this.lavels.scores.sumScores)) {
            this.lavel = this.lavels.getLavlelByScore(oldLavel, score);
        }
        else {
            throw new Error("incorrect lavel or score");
        }
    }



    public getRepetitionDate(): string {
        return this.repetitionDate;
    }
    public setRepetitionDate(date: Date): void {
        this.repetitionDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }

    setDateByLavel() {
        let date = new Date();
        date.setDate(date.getDate() + this.lavels.daysOfEachLavel[this.lavel - 1]);
        this.setRepetitionDate(date)
        console.log(date);

    }


}

//need to add conditinFu that ensures that the string is in order   
export class Lavels {
    daysOfEachLavel: number[];
    sumLavels: number;
    scores: Scores;

    constructor(daysOfEachLavel?: string, scorse?: Scores) {
        if (daysOfEachLavel) {
            //needs get and set for this.daysOfEachLavel
            this.daysOfEachLavel = daysOfEachLavel.split("-").map(Number);
        } else {
            this.daysOfEachLavel = [1, 3, 7, 30, 90];
        }
        this.sumLavels = this.daysOfEachLavel.length;
        this.scores = scorse ? scorse : new Scores(this.sumLavels);

    }

    addLavel(sumDays: number): void {
        var value = this.daysOfEachLavel.find(elem => sumDays <= elem)
        if (value === sumDays) {
            throw new Error("this lavel alredy exists")
        } else if (value <= 0) {
            throw new Error("this lavel incorrect")
        } else if (typeof (value) == undefined) {
            this.daysOfEachLavel.push(value);
        } else {
            var index = this.daysOfEachLavel.indexOf(value)
            this.daysOfEachLavel.splice(index, 0, sumDays);
        }
    }

    chengeLavel(lavel: number, newDays: number) {
        if (lavel > 0 && lavel < this.sumLavels + 1) {
            if (newDays >= this.daysOfEachLavel[lavel - 1] && newDays > this.daysOfEachLavel[lavel]) {
                this.daysOfEachLavel[lavel - 1] = newDays
            } else {
                throw new Error("the value of the days is wrong between the lavles")
            }
        }
    }

    getLavlelByScore(oldLavel: number, score: number): number {
        if (Number.isNaN(this.scores.daysOfEachScore[score - 1])) {
            return 1;
        } else if (oldLavel + this.scores.daysOfEachScore[score - 1] >= 1) {
            return oldLavel + this.scores.daysOfEachScore[score - 1];
        } else {
            return 1;
        }
    }



}

// class daysOfLavel {
//     lavel: number;
//     days: number;
// }


export class Scores {
    sumScores: number;
    daysOfEachScore: number[];
    sumLavels: number;

    constructor(sumLavels: number, daysOfEachScore?: string) {
        this.sumLavels = sumLavels;
        if (daysOfEachScore) {
            this.daysOfEachScore = daysOfEachScore.split("-").map(Number)
        } else {
            this.daysOfEachScore = [1, 0, -1, -2, +"/"];
        }
        this.sumScores = this.daysOfEachScore.length
    }

    //Need a serious examination
    addScore(valueOfScore: number): void {
        var value = this.daysOfEachScore.find(elem => valueOfScore >= elem)
        if (value === valueOfScore) {
            throw new Error("this score alredy exists")
            //have to add condition if the @parem valueOfScore is more or lass then sum of lavels instesd 5
        } else if (Math.abs(value) >= this.sumLavels) {
            throw new Error("incorrect value")
        } else if (value == undefined) {
            this.daysOfEachScore.splice(this.daysOfEachScore.length - 2, 0, value);
        } else {
            var index = this.daysOfEachScore.indexOf(value)
            this.daysOfEachScore.splice(index, 0, value);
        }
    }

    chengeScore(score: number, newDays: number) {
        //unable to chenge the vaule of last cell in the arrty.
        if (score >= 0 && score < this.sumScores) {
            if (Number.isNaN(this.daysOfEachScore[score])) {
                if (newDays <= this.daysOfEachScore[score - 1]) {
                    this.daysOfEachScore[score - 1] = newDays
                } else {
                    throw new Error("the value of the days is wrong between the scores")
                }
            } else {
                if (newDays > this.daysOfEachScore[score] && newDays <= this.daysOfEachScore[score - 1]) {
                    this.daysOfEachScore[score - 1] = newDays
                } else {
                    throw new Error("the value of the days is wrong between the scores")
                }
            }
        } else {
            throw new Error("the value of the score is wrong")
        }

    }
}
