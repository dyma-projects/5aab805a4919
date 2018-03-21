import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

    constructor() { }

    status: boolean;

    texts: string[];

    ngOnInit() {
        this.status = true;

        this.texts = ["un","deux","trois"]

    }

    changeStatus(): void {
        this.status = !this.status;
    }

}
