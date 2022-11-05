let y = 0;
let x = 0;
 

let personaje = document.getElementById('personaje');


function movimiento(event){
    if(event.keyCode == '39'){
        x= x + 100;
		personaje.style.left = x + 'px';
        document.getElementById('personaje').src = "/IMG/personaje1.png";
    }

  
	if(event.keyCode == '37'){
        x= x - 100;
		personaje.style.left = x +'px';
        document.getElementById('personaje').src = "/IMG/personaje1.png";
    }

    if(event.keyCode == '38'){
        x= x + 100;
        personaje.style.top = (-y) + 'px';
        document.getElementById('personaje').src = "/IMG/personaje1.png";

    }

    if(event.keyCode == '40'){
        x= x - 100;
        personaje.style.top = (-x) + 'px';
        document.getElementById('personaje').src = "/IMG/personaje1.png";

    }
  

}


window.onkeyup = movimiento;