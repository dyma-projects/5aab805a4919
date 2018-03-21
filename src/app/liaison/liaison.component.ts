import { Component, OnInit } from '@angular/core';
// import de FormsModule :
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-liaison',
  templateUrl: './liaison.component.html',
  styleUrls: ['./liaison.component.css']
})
export class LiaisonComponent implements OnInit {

  constructor() { }

  lienImage: string = "http://angular.io/assets/images/logos/angular/logo-nav@2x.png";

  nom: string;

  enter: string = "";

  ngOnInit() {
  }

  LogEnter(): void {
      this.enter += "Enter";
  }

}
