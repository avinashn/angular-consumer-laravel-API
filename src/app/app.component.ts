import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  data: Object = [];
  access_token:'';

  constructor(private usersService: UsersService) { }

  getAuthentication(): void {

	  this.usersService.getAccess().subscribe((res)=>{

  		this.access_token = res['access_token'];
  		this.getUsers();

	  });

  }

  getUsers(): void{

  	this.usersService.getUsers(this.access_token).subscribe((res)=>{

	    this.data =  res;
      
	  });

  }

	ngOnInit() {
	  this.getAuthentication();
	}

}
