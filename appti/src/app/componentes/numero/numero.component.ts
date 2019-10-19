import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-numero',
  templateUrl: './numero.component.html',
  styleUrls: ['./numero.component.scss'],
})
export class NumeroComponent implements OnInit {

  tipo_juego: string;
  bandera: boolean;
  btn1: string;
  btn2: string;
  btn3: string;
  btn4: string;
  btn5: string;
  img_uno: string = "";
  img_dos: string = "";
  img_tres: string = "";
  img_cuatro: string = "";
  img_cinco: string = "";
  idioma:string;
  public numeros:string='numeros';
  public animales:string="animales";
  public colores:string="colores";


  constructor(public router: Router) {
    console.log("constructor de numeros");
    // this.bandera = JSON.parse(localStorage.getItem('idioma'));
    this.idioma = localStorage.getItem("idioma");
    this.tipo_juego = localStorage.getItem("tipo_juego");
    //  this.email = localStorage.getItem("email");  --> ASI
   console.log("numeros: idioma", this.idioma)
   console.log("numeros: tipo_juego", this.tipo_juego)

   
    this.img_uno = "./assets/images/uno.png";
    this.img_dos = "./assets/images/dos.png";
    this.img_tres = "./assets/images/tres.png";
    this.img_cuatro = "./assets/images/cuatro.png";
    this.img_cinco= "./assets/images/cinco.png";
  

  }

  ngOnInit() {}

  reproducir(nom_audio) {
    const audio = new Audio('assets/sounds/' + nom_audio + '.mp3');
    audio.play();
  }

  reproducirAudio(nom_audio){ 
    this.idioma = localStorage.getItem("idioma");
    switch (this.tipo_juego) {
      case "numeros":
        switch (this.idioma) {    
           case "portugues":
                  switch (nom_audio) {
                          case "btn1":
                            // console.log("numeros, entre en btn1");
                            this.reproducir('unoP');
                            break;
                          case "btn2":
                            this.reproducir('dosP');
                            break;
                          case "btn3":
                            this.reproducir('tresP');
                            break;
                          case "btn4":
                            this.reproducir('cuatroP');
                            break;
                          case "btn5":
                            this.reproducir('cincoP');
                            break;
                          default:
                            // code...
                            break;
                        }
                        break;
              case "espaniol":
                    // console.log("estoy en espeniol");
                    // console.log("nom audio ", nom_audio );
                        switch (nom_audio) {
                          case "btn1":
                            this.reproducir('uno');
                            break;
                          case "btn2":
                            this.reproducir('dos');
                            break;
                          case "btn3":
                            this.reproducir('tres');
                            break;
                          case "btn4":
                            this.reproducir('cuatro');
                            break;
                          case "btn5":
                            this.reproducir('cinco');
                            break;
                          default:
                            // code...
                            break;
                        }
                        break;
              case "ingles":
                      switch (nom_audio) {
                        case "btn1":
                          this.reproducir('one');
                          break;
                        case "btn2":
                          this.reproducir('two');
                          break;
                        case "btn3":
                          this.reproducir('three');
                          break;
                        case "btn4":
                          this.reproducir('four');
                          break;
                        case "btn5":
                          this.reproducir('five');
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
  localStorage.setItem("tipo_juego", "animales");
  this.router.navigate(['/home/animal'])
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

  localStorage.setItem("tipo_juego", "colores");
  this.router.navigate(['/home/juego'])
}

}
