
var right= 0;
        var wrong = 0;
        var score = 0;
        let cards = document.getElementsByClassName("tileContainer");
        console.log(cards);
        let clicked;
        var gameStart=true;
        document.getElementById("score").innerHTML="Your Score: " + score ;
        document.getElementById("rightAttempts").innerHTML="Right Attempts: " + right ;
        document.getElementById("wrongAttempts").innerHTML="Wrong Attempts: " + wrong ;
        
        
        for(let card of cards){
            
            card.addEventListener("click", (e) => {
                if(!gameStart) return;
                
                if(clicked)
                {
                    card.firstElementChild.classList.add("flipped");
                    gameStart = false;
                    setTimeout(()=>{
                        if(clicked.firstElementChild.lastElementChild.firstChild.getAttributeNode("src").value !== card.firstElementChild.lastElementChild.firstChild.getAttributeNode("src").value)
                        {
                            card.firstElementChild.classList.remove("flipped");
                            clicked.firstElementChild.classList.remove("flipped");
                            wrong++;
                            document.getElementById("wrongAttempts").innerHTML="Wrong Attempts: " + wrong ;
        
                        } 
                        else
                        {
                            card.style.visibility="hidden";
                            clicked.style.visibility="hidden";
                            right++;
                            score++;

                            document.getElementById("rightAttempts").innerHTML="Right Attempts: " + right ;
                            document.getElementById("wrongAttempts").innerHTML="Wrong Attempts: " + wrong ;
                            document.getElementById("score").innerHTML="Your Score: " + score ;
                        }
                        clicked= undefined;
                        gameStart= true;
                    }, 500);
                    
                } 
                
                else
                {   
                clicked = card;
                card.firstElementChild.classList.add("flipped");
                console.log(card.children);
                }
            })   

        }