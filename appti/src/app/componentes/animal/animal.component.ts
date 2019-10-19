import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
    idioma:string;
    tipo_juego: string;
    bandera: boolean;
    btn1: string;
    btn2: string;
    btn3: string;
    btn4: string;
    btn5: string;
    img_source1: string = "";
    img_source2: string = "";
    img_source3: string = "";
    img_source4: string = "";
    img_source5: string = "";
  
    constructor(public router: Router) {
      this.idioma = localStorage.getItem("idioma");
      this.tipo_juego = localStorage.getItem("tipo_juego");
  
      this.img_source1 = "./assets/images/leon.png";
      this.img_source2 = "./assets/images/vaca.png";
      this.img_source3 = "./assets/images/mono.png";
      this.img_source4 = "./assets/images/oveja.png";
      this.img_source5 = "./assets/images/conejo.png";
  
    }
  
    ngOnInit() {}
  
    reproducir(nom_audio) {
      console.log("audio:", nom_audio);
      const audio = new Audio('assets/sounds/' + nom_audio + '.mp3');
      audio.play();
    }
  
    reproducirAudio(nom_audio){
      this.idioma = localStorage.getItem("idioma"); 
      switch (this.tipo_juego) {
        case "animales":
            switch (this.idioma) {    
               case "espaniol":
                      switch (nom_audio) {
                        case "btn1":            
                          this.reproducir('leon');
                          break;
                        case "btn2":
                          this.reproducir('vaca');
                          break;
                        case "btn3":
                          this.reproducir('mono');
                          break;
                        case "btn4":
                          this.reproducir('oveja');
                          break;
                        case "btn5":
                          this.reproducir('conejo');
                          break;
                        default:
                          // code...
                          break;
                      }
                      break;
            case "ingles":              
                      switch (nom_audio) {
                        case "btn1":
                          this.reproducir('lion');
                          break;
                        case "btn2":
                          this.reproducir('cow');
                          break;
                        case "btn3":
                          this.reproducir('monkey');
                          break;
                        case "btn4":
                          this.reproducir('sheep');
                          break;
                        case "btn5":
                          this.reproducir('rabbit');
                          break;
                        default:
                          // code...
                          break;
                      }
                      break;
             case "portugues":
                      switch (nom_audio) {
                        case "btn1":            
                          this.reproducir('leonP');
                          break;
                        case "btn2":
                          this.reproducir('vacaP');
                          break;
                        case "btn3":
                          this.reproducir('monoP');
                          break;
                        case "btn4":
                          this.reproducir('ovejaP');
                          break;
                        case "btn5":
                          this.reproducir('conejoP');
                          break;
                        default:
                          // code...
                          break;
                      }
                      break;
          }
          break;  
    }
  }

  idiomaEspaniol(){
    this.reproducir('español');
    // localStorage.setItem('idioma', JSON.stringify("espaniol"));
    localStorage.setItem("idioma", "espaniol");
  }
  
  idiomaIngles(){
    this.reproducir('english');
    // localStorage.setItem('idioma', JSON.stringify("ingles"));
    localStorage.setItem("idioma", "ingles");
  }
  idiomaPortugues(){
    this.reproducir('portugues');
    localStorage.setItem("idioma", "portugues");
    // localStorage.setItem('idioma', JSON.stringify("portugues"));
  }
  
  irANumeros(){
    switch (this.idioma) {    
      case "portugues":
             this.reproducir('numerosP');
             break;
      case "espaniol":
             this.reproducir('numeros');
             break;  
      case "ingles":
             this.reproducir('numbers');
             break;  
    } 
		localStorage.setItem('tipo_juego', "numeros");
    this.router.navigate(['/home/numero'])
  }

  irAColores(){
    switch (this.idioma) {    
      case "portugues":
             this.reproducir('coloresP');
             break;
      case "espaniol":
             this.reproducir('colores');
             break;  
      case "ingles":
             this.reproducir('colors');
             break;  
    } 
    localStorage.setItem('tipo_juego', "colores");
    this.router.navigate(['/home/juego'])
  }

 
  
  }
  