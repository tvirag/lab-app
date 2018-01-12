import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
})


export class Lab1Component implements OnInit {

  title = 'app';
  posts: any[];
  constructor(private http: HttpClient) {
    this.http.get<any[]>('http://localhost:3000/posts').subscribe(t=> {
	     console.log(t);
	      this.posts = t;
      })
}

  ngOnInit() {
  }
}

//export class Lab1Component implements OnInit {
//    title = 'app';
//    posts: any[];
//    constructor(private http: HttpClient) {
//  	this.http.get<any[]>('http://localhost:3000/posts?q=B2').subscribe(t=> {
//  		console.log(t);
//  		this.posts = t;
//  	});
//  }
