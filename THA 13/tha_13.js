

const btn = document.getElementById("btn");

btn.addEventListener('click', getMeme)
const imagePresent =false;

const main = document.querySelector("#holder"); 
const result = document.createElement('div');;
result.className="mainHolder" ;

const image = document.createElement('img'); 
image.className="imgHolder";  

result.appendChild(image); 
main.appendChild(result); 

function getMeme(){
    image.src="";
    fetch(`https://meme-api.herokuapp.com/gimme/wholesome`)
    .then((res)=> res.json())                 
    .then((data) =>{
        getResponse(data)
    });
}

function getResponse(data){
    image.src= `${data.url}`; 
}


getMeme();




