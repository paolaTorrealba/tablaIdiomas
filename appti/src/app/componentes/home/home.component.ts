import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  bandera: boolean; //true: español / false: ingles

  constructor(public router: Router) { 
		let local_bandera = JSON.parse(localStorage.getItem('idioma'));
		console.log(local_bandera);
    if(local_bandera != null)
    {
      this.bandera = local_bandera;
    }else{
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
		localStorage.setItem('idioma', JSON.stringify("espaniol"));
	}

	idiomaIngles(){
		this.reproducir('english');
		localStorage.setItem('idioma', JSON.stringify("ingles"));
	}
	idiomaPortugues(){
		this.reproducir('portugues');
		localStorage.setItem('idioma', JSON.stringify("portugues"));
	}

  reproducir(nom_audio) {
		console.log(nom_audio);
		const audio = new Audio('assets/sounds/' + nom_audio + '.mp3');
	  audio.play();
  }

  reproducirAudio(nom_audio){
		console.log("home audio:", nom_audio);
  	//console.log(this.bandera);
  	//console.log(nom_audio);
  	if(this.bandera)
  	{
  		switch (nom_audio) {
				case "colores":
				console.log("home audio:", nom_audio);
  				this.reproducir('colores');
          localStorage.setItem('tipo_juego', "colores");
  				break;
				case "numeros":
				console.log("home audio:", nom_audio);
  				this.reproducir('numeros');
					localStorage.setItem('tipo_juego', "numeros");					
  				break;
				case "animales":
				console.log("home audio:", nom_audio);
  				this.reproducir('animales');
          localStorage.setItem('tipo_juego', "animales");
  				break;
  			default:
  				// code...
  				break;
  		}
  	}else{
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
  	}
    //console.log(localStorage.getItem('tipo_juego'));


  }


}