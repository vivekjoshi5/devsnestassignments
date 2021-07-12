

let score=0;  
let currentQuestionNumber = 0;
const container = document.querySelector(".questionContainer")
class questionBody{                    //Class is created with properties and methods
    constructor(question, options, answer){        //Constructor is used to pass in arguments
        this.question = question;
        this.options = options;
        this.answer = answer;
    }
    checkAnswer(option){               //This line of code takes the option user clicked
        if(option === this.answer){    // and checks against the value contained in this.answer.
            return true;               // Returns True or false based on the condition specified.
        }
        else
        {
            return false;
        }
    }

    printOnScreen(){                          //This line of code prints the questions on the screen
        container.innerHTML = "";
        const currentQuestion = document.createElement("h3"); 
        currentQuestion.innerText = this.question;
        container.appendChild(currentQuestion);   
        for(let key in this.options){          //This loop was created to insert each option element in the parent div.
            let option= document.createElement("div");
            let optionContent = document.createElement("p");
            optionContent.innerText = key + " " + this.options[key];
            option.appendChild(optionContent);
            container.appendChild(option);
            let btn = document.createElement('button');
            btn.id = "option";
            btn.innerText = "Select Answer";
            option.appendChild(btn);
                                                   
            btn.addEventListener("click",()=>{   //An Event listener is added to capture the user clicked option.
                if(this.checkAnswer(key)){       //If return of checkAnswer() is true the score will increase by 1.
                    score++
                }
                currentQuestionNumber++;         //This line & below it increases currenrQuestionNumber by 1
                printQuestion(questions[currentQuestionNumber]); // and accordingly takes the objects from 'questions' array. 
                
            });   
        }
    }
}


const question1 = new questionBody(      //New objects are being created from class using the 'new' keyword.
    "Q.1 The 'function' and 'var' are known as:",
    { 
        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes"
    },
    "c"   
)


const question2 = new questionBody(
    "Q.2 When interpreter encounters an empty statements, what it will do:",
    { 
        a: "Shows a warning",
        b: "Prompts to complete the statement",
        c: "Throws an error",
        d: "Ignores the statements"
    },
    "d"  
)


const question3 = new questionBody(
    "Q.3 Which of the following variables takes precedence over the others if the names are the same?",
    { 
        a: "Global variable",
        b: "The local element",
        c: "The two of the above",
        d: "None of the above"
    },
    "b"   
)


const question4 = new questionBody(
    "Q.4 Which one of the following is the correct way for calling the JavaScript code?",
    { 
        a: "Preprocessor",
        b: "Triggering Event",
        c: "RMI",
        d: "Function/Method"
    },
    "d"   
)


const question5 = new questionBody(
    "Q.5 In the JavaScript, which one of the following is not considered as an error:",
    { 
        a: "Syntax error",
        b: "Missing of semicolons",
        c: "Missing of Bracket",
        d: "Prototypes"
    },
    "c"   
)


const question6 = new questionBody(
    "Q.6 Which of the following number object function returns the value of the number?",
    { 
        a: "toString()",
        b: "valueOf()",
        c: "toLocaleString()",
        d: "toPrecision()"
    },
    "b"   
)


const question7 = new questionBody(
    "Q.7 Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
    { 
        a: "slice()",
        b: "split()",
        c: "substr()",
        d: "search()"
    },
    "c"   
)


const question8 = new questionBody(
    "Q.8 In JavaScript the x===y statement implies that:",
    { 
        a: "Both x and y are equal in value, type and reference address as well.",
        b: "Both are x and y are equal in value only.",
        c: "Both are equal in the value and data type.",
        d: "Both are not same at all."
    },
    "c"   
)


const question9 = new questionBody(
    "Q.9 Suppose we have a text 'human' that we want to convert into string without using the 'new' operator. Which is the correct way from the following to do so:",
    { 
        a: "toString()",
        b: "String(human)",
        c: "String newvariable='human'",
        d: "Both human.toString() and String(human)"
    },
    "d"   
)


const question10 = new questionBody(
    "Q.10 Which one of the following operator returns false if both values are equal?",
    { 
        a: "!",
        b: "!==",
        c: "!=",
        d: "All of the above"
    },
    "c"   
)



// question1.printOnScreen()       //this prints first question on screen, options & buttons.


function displayScore(){        //this function helps in displaying quiz score in the end.
    const scoreBoard = document.createElement("h1");  //creates an element having scores.
    scoreBoard.innerText= `You scored ${score}/10`;
    container.innerHTML = "" //clears the previous text and replaces with blank
    container.appendChild(scoreBoard); //appends the score element to the container

    const retryButton = document.createElement("button"); //creates Retry button element to print on screen after quiz ends.
    retryButton.id = "retry";
    retryButton.innerText="Retry"; 
    retryButton.addEventListener("click",function(){       //event listener added to element so when user clicks it, score/question becomes 0 & first question prints
        score= 0;
        currentQuestionNumber =0;
        printQuestion(question1);
    });

    container.appendChild(retryButton);

}

function printQuestion(question){   //This function prints question property of the object passed inside it.
    if(!question){                  // In case Question = undefined or no question[index more than max index]. It run display score function.
        return displayScore()
    }
    question.printOnScreen();       //In case Question = defined or questions left it will continue the loop inside printOnScreen
}


const questions = [               //Array declared to contain objects with questions, options & answers
    question1,
    question2, 
    question3,
    question4, 
    question5, 
    question6, 
    question7,
    question8,
    question9,
    question10
];

printQuestion(question1);  //Initiates the first object execution



