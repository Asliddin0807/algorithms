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
   
   set testOy(v){
      let a = new Date(v);
      a.oys();
      
    }
    get testOy(){
        return this.testOy;
    }
}

let date = new TestDate('12')

date.testOy = 11;
console.log(date.testOy());
