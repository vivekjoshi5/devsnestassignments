document.getElementById("coolBlue").addEventListener("dblclick", hitTwice);

function hitTwice(){
    document.getElementById("coolBlue").style.backgroundColor="crimson";
    document.getElementById("coolBlue").style.border= "5px solid orange";
}


document.getElementById("switchNew").addEventListener('mouseover',mouseOn);
document.getElementById("switchNew").addEventListener('mouseout',mouseOff);

function mouseOn(){
    document.getElementById("switchNew").style.backgroundColor="black";
    touched();
}

function touched(){
    document.getElementById("switch").style.backgroundColor="black";
}

function original(){
    document.getElementById("switch").style.backgroundColor="red";
}

function mouseOff(){
    document.getElementById("switchNew").style.backgroundColor="yellow";
    original();
}
