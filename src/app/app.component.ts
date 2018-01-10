import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  posts: any[];
  constructor(private http: HttpClient) {
	this.http.get<any[]>('http://localhost:3000/posts').subscribe(t=> {
		console.log(t);
		this.posts = t;
	});
}
}
