import { DataService } from './service/data.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService,
    private dataService: DataService) {}
  
    ngOnInit(): void {
      this.loadUsers();
      this.getPostById(9999);

    }


    loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
    
  }

  getPostById(id: number): void {
    this.dataService.getDataPostById(id).subscribe(post => {
      console.log(post);
    });

  
  }

}
