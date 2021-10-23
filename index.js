
 const array = [
 	{
 		dibujo: 'dibujo1',
 		imagen: 'img/01.jpg'
 	},
 	{
 		dibujo: 'dibujo1',
 		imagen: 'img/01.jpg'
 	},
 	{
 		dibujo: 'dibujo2',
 		imagen: 'img/02.jpg'
 	},
 	{
 		dibujo: 'dibujo2',
 		imagen: 'img/02.jpg'
 	},
 	{
 		dibujo: 'dibujo3',
 		imagen: 'img/03.jpg'
 	}
 	,
 	{
 		dibujo: 'dibujo3',
 		imagen: 'img/03.jpg'
 	},
 	{
 		dibujo: 'dibujo4',
 		imagen: 'img/04.jpg'
 	},
 	{
 		dibujo: 'dibujo4',
 		imagen: 'img/04.jpg'
 	},
	 {
		dibujo: 'dibujo5',
		imagen: 'img/05.jpg'
	}
	,
	{
		dibujo: 'dibujo5',
		imagen: 'img/05.jpg'
	},
	{
		dibujo: 'dibujo6',
		imagen: 'img/06.jpg'
	},
	{
		dibujo: 'dibujo6',
		imagen: 'img/06.jpg'

	},
	{
		dibujo: 'dibujo7',
		imagen: 'img/07.jpg'
	}
	,
	{
		dibujo: 'dibujo7',
		imagen: 'img/07.jpg'
	},
	{
		dibujo: 'dibujo8',
		imagen: 'img/08.jpg'
	},
	{
		dibujo: 'dibujo8',
		imagen: 'img/08.jpg'

	}
	
 ]


let seleccionadas = 0;
let cartaAnterior = -1;
let movimientos = 0;
let aciertos = 0;



 function mezclarCartas(){
 	 array.sort(() => Math.random() - 0.5);
 	 console.log(array);
 	 for (var i =0; i < array.length ;i++) {
 	 	document.getElementById(i).setAttribute("class", "carta reverso");
 	 }
 }



 function mostrarCarta(i){
 	document.getElementById(i).style.backgroundImage = "url('"+array[i].imagen+"')";

 }



 function ocultarCarta(i){
 	document.getElementById(i).style.backgroundImage = "url('img/reverso.jpg')";
 }



 function elegirCarta(i){
 	mostrarCarta(i);
 	if (seleccionadas == 0){
 		cartaAnterior = i;
 		seleccionadas = 1;	
 	}else{
 		if(array[cartaAnterior].dibujo === array[i].dibujo){
 			aciertos++;
 		}else{
 			setTimeout(() => {  ocultarCarta(cartaAnterior); ocultarCarta(i); }, 1000);
 		}
 	seleccionadas = 0;
 	movimientos++;	
 	}
 	
 	document.getElementById("movimientos").innerHTML = movimientos;

 	if (aciertos == 4){
 		document.getElementById("ganador").innerHTML = "Felicidades! Encotraste todas las parejas";
 	}

 }


