function create(){

    for(let i = 0; i < 400; i++){        
        const newPixel = document.createElement("button");
        newPixel.addEventListener("click", clicked);
        const main = document.getElementById("content");
        main.appendChild(newPixel);

        if( i == 129 || i == 130 || i == 148 || i == 149 || i == 150 || i == 151 || i == 167 || i == 168 || i == 169 || i == 170 || i == 171 || i == 172 || i == 186 || i == 187 || i == 189 || i == 190 || i == 192 || i == 193 || i == 206 || i == 207 || i == 208 || i == 209 || i == 210 || i == 211 || i == 212 || i == 213 || i == 228 || i == 231 || i == 247 || i == 249 || i == 250 || i == 252 || i == 266 || i == 268 || i == 271 || i == 273){
            newPixel.className = "pixelWhite";
        }
        else{
            newPixel.className = "pixelRed";
        }
    }    
}

function clicked(selected){
    if(selected.target.className == "pixelRed"){
        selected.target.className = "pixelWhite";
    }
    else{
        selected.target.className = "pixelRed"
    }
}

create();