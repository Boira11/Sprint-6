import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   ngOnInit(): void {
     throw new Error('Method not implemented.');
   }

  

   historia: Historia[] = [
    { frase: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",  },
    { frase: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes." },
    { frase: "L'heroi va decidir travessar la porta que el portava a casa" },
    { frase: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..." }
  ];

  


}

interface Historia {
  frase: string;
  
}




