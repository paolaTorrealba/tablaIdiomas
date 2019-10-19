import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss'],
})
export class JuegoComponent implements OnInit {
  
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
      // this.bandera = JSON.parse(localStorage.getItem('idioma'));
      // this.idioma= JSON.parse(localStorage.getItem('idioma'));
      this.idioma = localStorage.getItem("idioma");
      this.tipo_juego = localStorage.getItem("tipo_juego");
      console.log(this.tipo_juego);
      console.log(this.idioma);
  
      switch (this.tipo_juego) {
        case "colores":
        console.log("estoy en colores");
            this.img_source1 = "./assets/images/amarillo.png";
            this.img_source2 = "./assets/images/verde.png";
            this.img_source3 = "./assets/images/naranja.png";
            this.img_source4 = "./assets/images/azul.png";
            this.img_source5 = "./assets/images/rojo.png";
          break;
       
        default:
          // code...
          break;
      }
  
    }
  
    ngOnInit() {
      // this.idioma= JSON.parse(localStorage.getItem('idioma'));
      this.idioma = localStorage.getItem("idioma");
      this.tipo_juego = localStorage.getItem("tipo_juego");
      console.log("estoy en :",this.tipo_juego);
      console.log("el idioma es :",this.idioma);
    }
  
    
  
    reproducirAudio(nom_audio){
      this.idioma = localStorage.getItem("idioma");
     console.log("estoy reproducioendo en idioma: ",this.idioma);
      switch (this.tipo_juego) {
        case "colores":
            switch (this.idioma) {    
               case "portugues":
                      switch (nom_audio) {
                        case "btn1":
                          this.reproducir('amarilloP');
                          break;
                        case "btn2":
                          this.reproducir('verdeP');
                          break;
                        case "btn3":
                          this.reproducir('naranjaP');
                          break;
                        case "btn4":
                          this.reproducir('azulP');
                          break;
                        case "btn5":
                          this.reproducir('rojoP');
                          break;
                        default:
                          // code...
                          break;
                      }
                      break;
              case "espaniol":
                      switch (nom_audio) {
                        case "btn1":
                          this.reproducir('amarillo');
                          break;
                        case "btn2":
                          this.reproducir('verde');
                          break;
                        case "btn3":
                          this.reproducir('naranja');
                          break;
                        case "btn4":
                          this.reproducir('azul');
                          break;
                        case "btn5":
                          this.reproducir('rojo');
                          break;
                        default:
                          // code...
                          break;
                      }
                      break;
              case "ingles":
                    switch (nom_audio) {
                      case "btn1":
                        this.reproducir('yellow');
                        break;
                      case "btn2":
                        this.reproducir('green');
                        break;
                      case "btn3":
                        this.reproducir('orange');
                        break;
                      case "btn4":
                        this.reproducir('blue');
                        break;
                      case "btn5":
                        this.reproducir('red');
                        break;
                      default:
                        // code...
                        break;
                    }             
            }        
      }
  }

  reproducir(nom_audio) {
    const audio = new Audio('assets/sounds/' + nom_audio + '.mp3');
    audio.play();
  }
  idiomaEspaniol(){
    this.reproducir('español');
    // localStorage.setItem('idioma', JSON.stringify("espaniol"));
    localStorage.setItem("idioma", "espaniol");
    console.log("cambie a español")
  }
  
  idiomaIngles(){
    this.reproducir('english');
    // localStorage.setItem('idioma', JSON.stringify("ingles"));
    localStorage.setItem("idioma", "ingles");
    console.log("cambie a ingles")
  }
  idiomaPortugues(){
    this.reproducir('portugues');
    localStorage.setItem("idioma", "portugues");
    console.log("cambie a portugues")
    // localStorage.setItem('idioma', JSON.stringify("portugues"));
  }

    irAAnimales(){
      switch (this.idioma) {    
        case "portugues":
               this.reproducir('animalesP');
               break;
        case "espaniol":
               this.reproducir('animales');
               break;  
        case "ingles":
               this.reproducir('animals');
               break;  
      } 
      localStorage.setItem('tipo_juego', "animales");
      this.router.navigate(['/home/animal'])
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
  
  }
