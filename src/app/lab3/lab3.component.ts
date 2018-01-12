import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.component.html',
  styleUrls: ['./lab3.component.css']
})
export class Lab3Component implements OnInit {

  title = 'app';
  cspTitle: string;
  csp: any[];
  constructor(private http: HttpClient) {
    this.csp = [
      { id: 1, title: 'test', region: 'test'}
    ]
    //this.http.get<any[]>('http://localhost:3000/csp').subscribe(t=> {
    //  this.csp = t;
    //  })
  }

  ngOnInit() {
  }

}
