class Book{
    constructor(name, page_number, author, pubisher){
        this.name = name;
        this.page_number = page_number;
        this.author = author;
        this.pubisher = pubisher;
    }
    set names(v){
        if(v == 'string'){
            return v;
        }
    }
    get names(){
        return this.names;
    }
    set page_numbers(v){
        if(v < 100){
            return v;
        }
    }  
    get page_numbers(){
        return this.page_numbers;
    }
    set authors(v){
        if(v == ' '){
            return v;
        }
    }
    get authors(){ 
       return this.authors;
    }
    set pubishers(v){
        if(v < 10000){
            return v;
        }
    }
    get pubishers(){
        return this.pubisher;
    }
}
class BookTest{
    constructor(name){
        this.name = name;
    }
    bookSort(){
        console.log(this.name);
    }
}
let book = new BookTest();
book.name = 'Asliddin';
book.page_number = '50';
book.author = 'Nuriddinov Asliddin';
book.pubishers = 2020;
let list = [book.name, book.page_number, book.author, book.pubishers];
function bookSort(n){
   for(let i = 0; i < list.length; i++){
        if(n == list[i]){
            console.log(list);
        }
       
   }
}
bookSort(book.name);