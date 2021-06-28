const myCurrentRead = {
    name: 'The Art Of Thinking Clearly',
    author: 'Rolf Dobelli',
    genre: 'Fiction',
    totalPages: '326',
    ratingOnGoodReads: '3.9/5'
}
console.log(myCurrentRead);


nextRead = Object.create(myCurrentRead);
nextRead.name = 'The Power Of Subconsicous Mind'
nextRead.author = 'Joseph Murphy'
nextRead.genre = 'Non-fiction'
nextRead.totalPages= '304'
nextRead.ratingOnGoodReads ='4.1/5'

//2nd object 
console.log(nextRead);

const printer = {
    print: function(){
        console.log("printing book name & author now:"+ this.name + " by " + this.author)
    },
    printRandom: function(a,b){
        console.log("Printing two things you passed:" + a +" "+ b)
    }
    
}

printer.print.call(myCurrentRead);
printer.print.call(nextRead);


printer.printRandom.apply(printer,["abc", "xyz"]);
console.log(printer.printRandom.bind());
