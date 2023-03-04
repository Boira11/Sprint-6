import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
  
  @Input() historia: any ;

  currentSentence = 0;

  prev() {
    if (this.currentSentence > 0) {
      this.currentSentence--;
    }
  }

  next() {
    
    if (this.currentSentence < this.historia.length - 1) {
      this.currentSentence++;
    }

   
  }
  

}
