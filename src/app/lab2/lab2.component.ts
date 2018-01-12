import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-lab2',
  templateUrl: './lab2.component.html',
  styleUrls: ['./lab2.component.css']
})
export class Lab2Component implements OnInit {

  title = 'app';
  csp: any[];
  constructor(private http: HttpClient) {
    this.http.get<any[]>('http://localhost:3000/csp').subscribe(t=> {
	     console.log(t);
	      this.csp = t;
      })
  }


  ngOnInit() {
  }

}
