import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../Model/UserDetails';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../Service/user.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  displayedColumns: string[] = ['First Name', 'Last Name', 'Date of Birth', 'Gender', 'Status'];
  dataSource: any;
  pageLength: any;
  pageSize = 10;
  currentPage = 0;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }
  getServerData(event:PageEvent){
    this.currentPage = 10 * event.pageIndex;
    this.fetchUsers();
  }

  fetchUsers(){
    this.userService.getUserDetails().subscribe(data =>{
      this.pageLength = (data as any).records.length;
      this.dataSource = (data as any).records.splice(this.currentPage,10);
    });
  }
}
