class Date{
    constructor(oy, kun, yil){
        this.oy = 0;
        this.kun = kun;
        this.yil = yil;
    }
    displayDate(){
       console.log(`${this.kuns}`+'/'+`${this.oys}`+'/'+`${this.yils}`)
    }
    set oys(value){
        if(value <= 12){
            return value;
        }
    }
    get oys(){
       return this.oy;
    }
    set kuns(value){
       if(value <= 30){
        return value;
       }
    }
    get kuns(){
       return this.kun;
    }
    set yils(value){
       if(value < 10000){
        return value;
       }
    }
    get yils(){
        return this.yil;
    }
}
class TestDate{
    constructor(name){
        this.name = name;
    }
}

let date = new TestDate('12')
date.kuns = 13;
date.oys = 11;
date.yils = 2020;
console.log(date.kuns+'/'+date.oys+'/'+date.yils)

