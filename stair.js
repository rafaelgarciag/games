var pinguino, contexto, dado, casilla, azar;

function aleatorio (minimo, maximo)
{
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var Personaje = function (cont)
{
	this.personaURL = "lulu.jpg";
	this.personaOK = false;
	this.contexto = cont;
	this.x = 0;
	this.y = 0;
	this.casilla = 1;

}

var tablero =
{
	tablaURL: "tablero.png",
	tablaOK: false
};

var letrero =
{
	letreroURL: "letrero.jpg",
	letreroOK: false
};

function escalar ()
{
	var canvas = document.getElementById("tabla");
	contexto = canvas.getContext("2d");
	dado = document.getElementById("boton");

	dado.addEventListener("click", lanzamiento);

	tablero.imagen = new Image();
	tablero.imagen.src = tablero.tablaURL;
	tablero.imagen,onload = confirmarCarga;

	pinguino = new Personaje(contexto);
	
	pinguino.imagen = new Image();
	pinguino.imagen.src = pinguino.personaURL;
	pinguino.imagen.onload = confirmarCarga;

	letrero.imagen = new Image();
	letrero.imagen.src = letrero.letreroURL;
	letrero.imagen.onload = confirmarCarga;
}

function confirmarCarga ()
{
	tablero.tablaOK = true;
	pinguino.personaOK = true;
	letrero.letreroOK = true;

	establecerImagenes();
}

function establecerImagenes ()
{
	contexto.drawImage(tablero.imagen, 0, 0);

	if ( pinguino.casilla == 1 ) { pinguino.x = 0; pinguino.y = 0 ;}
	if ( pinguino.casilla == 2 ) { pinguino.x = 50; pinguino.y = 0 ;}
	if ( pinguino.casilla == 3 ) { pinguino.x = 100; pinguino.y = 0 ;}
	if ( pinguino.casilla == 4 ) { pinguino.x = 150; pinguino.y = 0 ;}
	if ( pinguino.casilla == 5 ) { pinguino.x = 200; pinguino.y = 0 ;}
	if ( pinguino.casilla == 6 ) { pinguino.x = 250; pinguino.y = 0 ;}
	if ( pinguino.casilla == 7 ) { pinguino.x = 300; pinguino.y = 0 ;}
	if ( pinguino.casilla == 8 ) { pinguino.x = 350; pinguino.y = 0 ;}
	if ( pinguino.casilla == 9 ) { pinguino.x = 400; pinguino.y = 0 ;}
	if ( pinguino.casilla == 10 ) { pinguino.x = 450; pinguino.y = 0 ;}
	if ( pinguino.casilla == 11 ) { pinguino.x = 450; pinguino.y = 50 ;}
	if ( pinguino.casilla == 12 ) { pinguino.x = 400; pinguino.y = 50 ;}
	if ( pinguino.casilla == 13 ) { pinguino.x = 350; pinguino.y = 50 ;}
	if ( pinguino.casilla == 14 ) { pinguino.x = 300; pinguino.y = 50 ;}
	if ( pinguino.casilla == 15 ) { pinguino.x = 250; pinguino.y = 50 ;}
	if ( pinguino.casilla == 16 ) { pinguino.x = 200; pinguino.y = 50 ;}
	if ( pinguino.casilla == 17 ) { pinguino.x = 150; pinguino.y = 50 ;}
	if ( pinguino.casilla == 18 ) { pinguino.x = 100; pinguino.y = 50 ;}
	if ( pinguino.casilla == 19 ) { pinguino.x = 50; pinguino.y = 50 ;}
	if ( pinguino.casilla == 20 ) { pinguino.x = 0; pinguino.y = 50 ;}
	if ( pinguino.casilla == 21 ) { pinguino.x = 0; pinguino.y = 100 ;}
	if ( pinguino.casilla == 22 ) { pinguino.x = 50; pinguino.y = 100 ;}
	if ( pinguino.casilla == 23 ) { pinguino.x = 100; pinguino.y = 100 ;}
	if ( pinguino.casilla == 24 ) { pinguino.x = 150; pinguino.y = 100 ;}
	if ( pinguino.casilla == 25 ) { pinguino.x = 200; pinguino.y = 100 ;}
	if ( pinguino.casilla == 26 ) { pinguino.x = 250; pinguino.y = 100 ;}
	if ( pinguino.casilla == 27 ) { pinguino.x = 300; pinguino.y = 100 ;}
	if ( pinguino.casilla == 28 ) { pinguino.x = 350; pinguino.y = 100 ;}
	if ( pinguino.casilla == 29 ) { pinguino.x = 400; pinguino.y = 100 ;}
	if ( pinguino.casilla == 30 ) { pinguino.x = 450; pinguino.y = 100 ;}
	if ( pinguino.casilla == 31 ) { pinguino.x = 450; pinguino.y = 150 ;}
	if ( pinguino.casilla == 32 ) { pinguino.x = 400; pinguino.y = 150 ;}
	if ( pinguino.casilla == 33 ) { pinguino.x = 350; pinguino.y = 150 ;}
	if ( pinguino.casilla == 34 ) { pinguino.x = 300; pinguino.y = 150 ;}
	if ( pinguino.casilla == 35 ) { pinguino.x = 250; pinguino.y = 150 ;}
	if ( pinguino.casilla == 36 ) { pinguino.x = 200; pinguino.y = 150 ;}
	if ( pinguino.casilla == 37 ) { pinguino.x = 150; pinguino.y = 150 ;}
	if ( pinguino.casilla == 38 ) { pinguino.x = 100; pinguino.y = 150 ;}
	if ( pinguino.casilla == 39 ) { pinguino.x = 50; pinguino.y = 150 ;}
	if ( pinguino.casilla == 40 ) { pinguino.x = 0; pinguino.y = 150 ;}
	if ( pinguino.casilla == 41 ) { pinguino.x = 0; pinguino.y = 200 ;}
	if ( pinguino.casilla == 42 ) { pinguino.x = 50; pinguino.y = 200 ;}
	if ( pinguino.casilla == 43 ) { pinguino.x = 100; pinguino.y = 200 ;}
	if ( pinguino.casilla == 44 ) { pinguino.x = 150; pinguino.y = 200 ;}
	if ( pinguino.casilla == 45 ) { pinguino.x = 200; pinguino.y = 200 ;}
	if ( pinguino.casilla == 46 ) { pinguino.x = 250; pinguino.y = 200 ;}
	if ( pinguino.casilla == 47 ) { pinguino.x = 300; pinguino.y = 200 ;}
	if ( pinguino.casilla == 48 ) { pinguino.x = 350; pinguino.y = 200 ;}
	if ( pinguino.casilla == 49 ) { pinguino.x = 400; pinguino.y = 200 ;}
	if ( pinguino.casilla == 50 ) { pinguino.x = 450; pinguino.y = 200 ;}
	if ( pinguino.casilla == 51 ) { pinguino.x = 450; pinguino.y = 250 ;}
	if ( pinguino.casilla == 52 ) { pinguino.x = 400; pinguino.y = 250 ;}
	if ( pinguino.casilla == 53 ) { pinguino.x = 350; pinguino.y = 250 ;}
	if ( pinguino.casilla == 54 ) { pinguino.x = 300; pinguino.y = 250 ;}
	if ( pinguino.casilla == 55 ) { pinguino.x = 250; pinguino.y = 250 ;}
	if ( pinguino.casilla == 56 ) { pinguino.x = 200; pinguino.y = 250 ;}
	if ( pinguino.casilla == 57 ) { pinguino.x = 150; pinguino.y = 250 ;}
	if ( pinguino.casilla == 58 ) { pinguino.x = 100; pinguino.y = 250 ;}
	if ( pinguino.casilla == 59 ) { pinguino.x = 50; pinguino.y = 250 ;}
	if ( pinguino.casilla == 60 ) { pinguino.x = 0; pinguino.y = 250 ;}
	if ( pinguino.casilla == 61 ) { pinguino.x = 0; pinguino.y = 300 ;}
	if ( pinguino.casilla == 62 ) { pinguino.x = 50; pinguino.y = 300 ;}
	if ( pinguino.casilla == 63 ) { pinguino.x = 100; pinguino.y = 300 ;}
	if ( pinguino.casilla == 64 ) { pinguino.x = 150; pinguino.y = 300 ;}
	if ( pinguino.casilla == 65 ) { pinguino.x = 200; pinguino.y = 300 ;}
	if ( pinguino.casilla == 66 ) { pinguino.x = 250; pinguino.y = 300 ;}
	if ( pinguino.casilla == 67 ) { pinguino.x = 300; pinguino.y = 300 ;}
	if ( pinguino.casilla == 68 ) { pinguino.x = 350; pinguino.y = 300 ;}
	if ( pinguino.casilla == 69 ) { pinguino.x = 400; pinguino.y = 300 ;}
	if ( pinguino.casilla == 70 ) { pinguino.x = 450; pinguino.y = 300 ;}
	if ( pinguino.casilla == 71 ) { pinguino.x = 450; pinguino.y = 350 ;}
	if ( pinguino.casilla == 72 ) { pinguino.x = 400; pinguino.y = 350 ;}
	if ( pinguino.casilla == 73 ) { pinguino.x = 350; pinguino.y = 350 ;}
	if ( pinguino.casilla == 74 ) { pinguino.x = 300; pinguino.y = 350 ;}
	if ( pinguino.casilla == 75 ) { pinguino.x = 250; pinguino.y = 350 ;}
	if ( pinguino.casilla == 76 ) { pinguino.x = 200; pinguino.y = 350 ;}
	if ( pinguino.casilla == 77 ) { pinguino.x = 150; pinguino.y = 350 ;}
	if ( pinguino.casilla == 78 ) { pinguino.x = 100; pinguino.y = 350 ;}
	if ( pinguino.casilla == 79 ) { pinguino.x = 50; pinguino.y = 350 ;}
	if ( pinguino.casilla == 80 ) { pinguino.x = 0; pinguino.y = 350 ;}
	if ( pinguino.casilla == 81 ) { pinguino.x = 0; pinguino.y = 400 ;}
	if ( pinguino.casilla == 82 ) { pinguino.x = 50; pinguino.y = 400 ;}
	if ( pinguino.casilla == 83 ) { pinguino.x = 100; pinguino.y = 400 ;}
	if ( pinguino.casilla == 84 ) { pinguino.x = 150; pinguino.y = 400 ;}
	if ( pinguino.casilla == 85 ) { pinguino.x = 200; pinguino.y = 400 ;}
	if ( pinguino.casilla == 86 ) { pinguino.x = 250; pinguino.y = 400 ;}
	if ( pinguino.casilla == 87 ) { pinguino.x = 300; pinguino.y = 400 ;}
	if ( pinguino.casilla == 88 ) { pinguino.x = 350; pinguino.y = 400 ;}
	if ( pinguino.casilla == 89 ) { pinguino.x = 400; pinguino.y = 400 ;}
	if ( pinguino.casilla == 90 ) { pinguino.x = 450; pinguino.y = 400 ;}
	if ( pinguino.casilla == 91 ) { pinguino.x = 450; pinguino.y = 450 ;}
	if ( pinguino.casilla == 92 ) { pinguino.x = 400; pinguino.y = 450 ;}
	if ( pinguino.casilla == 93 ) { pinguino.x = 350; pinguino.y = 450 ;}
	if ( pinguino.casilla == 94 ) { pinguino.x = 300; pinguino.y = 450 ;}
	if ( pinguino.casilla == 95 ) { pinguino.x = 250; pinguino.y = 450 ;}
	if ( pinguino.casilla == 96 ) { pinguino.x = 200; pinguino.y = 450 ;}
	if ( pinguino.casilla == 97 ) { pinguino.x = 150; pinguino.y = 450 ;}
	if ( pinguino.casilla == 98 ) { pinguino.x = 100; pinguino.y = 450 ;}
	if ( pinguino.casilla == 99 ) { pinguino.x = 50; pinguino.y = 450 ;}
	if ( pinguino.casilla == 100 ) { pinguino.x = 0; pinguino.y = 450 ;}	

	contexto.drawImage(pinguino.imagen, pinguino.x, pinguino.y);
}

function lanzamiento ()
{
	azar = aleatorio (1, 6);
	var texto;
	if(azar == 1) {	texto = " casilla!!";} else { texto = " casillas!!";}

	alert("Avanza " + azar + texto);

	pinguino.casilla += azar;

	if( pinguino.casilla > 100 )
		{
			pinguino.casilla -= azar;
		}
	
	avance();
}

function avance ()
{	
	establecerImagenes();
	
	if(pinguino.casilla == 45) {alert("Retrocede hasta la casilla 22"); pinguino.casilla = 22;}
	if(pinguino.casilla == 61) {alert("Retrocede hasta la casilla 40"); pinguino.casilla = 40;}
	if(pinguino.casilla == 89) {alert("Retrocede hasta la casilla 49"); pinguino.casilla = 49;}
	if(pinguino.casilla == 91) {alert("Retrocede hasta la casilla 71"); pinguino.casilla = 71;}
	if(pinguino.casilla == 99) {alert("Retrocede hasta la casilla 29"); pinguino.casilla = 29;}

	establecerImagenes();
	ganaste()

}

function ganaste ()
{
	if(pinguino.casilla == 100)
	{
		var ganador = document.getElementById("ganador");
		ganador.innerText = "Fin del Juego";
		contexto.drawImage(letrero.imagen, 0, 0);
	}
}

