import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

	bandera: boolean; //true: español / false: ingles
	public idioma:string;

  constructor(public router: Router) { 
		localStorage.setItem("idioma", "espaniol");
		this.idioma = localStorage.getItem("idioma");
		// let algo = JSON.parse(localStorage.getItem("idioma"));
		// console.log(algo);
		console.log(this.idioma);
    if(this.idioma != null)
    {
      // this.bandera = local_bandera;
    // }else{
      this.bandera = true;
		}
		
		console.log(this.bandera);
  }

  ngOnInit() {}


  // cambiarIdioma(bandera){
  // 	if (this.bandera) {
  // 		this.bandera = false;
  // 		this.reproducir('english');
  //     localStorage.setItem('idioma', JSON.stringify(this.bandera));
  // 	}
  // 	else{
  // 		this.bandera = true;
  // 		this.reproducir('español');
  //     localStorage.setItem('idioma', JSON.stringify(this.bandera));
  // 	}
	// }
	
	idiomaEspaniol(){
		this.reproducir('español');
		// localStorage.setItem('idioma', JSON.stringify("espaniol"));
		localStorage.setItem('idioma', "espaniol");
	}

	idiomaIngles(){
		this.reproducir('english');
		// localStorage.setItem('idioma', JSON.stringify("ingles"));
		localStorage.setItem('idioma', "ingles");
	}
	idiomaPortugues(){
		this.reproducir('portugues');
		// localStorage.setItem('idioma', JSON.stringify("portugues"));
		localStorage.setItem('idioma', "portugues");
	}

  reproducir(nom_audio) {
		console.log(nom_audio);
		const audio = new Audio('assets/sounds/' + nom_audio + '.mp3');
	  audio.play();
  }

  reproducirAudio(nom_audio){
console.log("this.idioma",this.idioma);
		switch(this.idioma){
  	   case "espaniol":
							switch (nom_audio) {
								case "colores":									
									this.reproducir('colores');
									localStorage.setItem("tipo_juego", "colores");
									break;
								case "numeros":									
									this.reproducir('numeros');
									localStorage.setItem("tipo_juego", "numeros");	
									break;
								case "animales":								
									this.reproducir('animales');
									localStorage.setItem("tipo_juego", "animales");
									break;
								default:
									// code...
									break;
							}
							break;
			case "ingles":
  	      	 switch (nom_audio) {
							case "colores":
								this.reproducir('colors');
								localStorage.setItem('tipo_juego', "colores");
								break;
							case "numeros":
								this.reproducir('numbers');
								localStorage.setItem('tipo_juego', "numeros");
								break;
							case "animales":
								this.reproducir('animals');
								localStorage.setItem('tipo_juego', "animales");
								break;
							default:
								// code...
								break;
							}
							break;
			case "portugues":	
						switch (nom_audio) {
							case "colores":
								this.reproducir('coloresP');
								localStorage.setItem('tipo_juego', "colores");
								break;
							case "numeros":
								this.reproducir('numeroP');
								localStorage.setItem('tipo_juego', "numeros");
								break;
							case "animales":
								this.reproducir('animalesP');
								localStorage.setItem('tipo_juego', "animales");
								break;
							default:
								// code...
								break;
							}
							break;		
  	}
    //console.log(localStorage.getItem('tipo_juego'));


  }


}