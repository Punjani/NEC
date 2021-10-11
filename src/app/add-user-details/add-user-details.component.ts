import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user-details',
  templateUrl: './add-user-details.component.html',
  styleUrls: ['./add-user-details.component.css']
})
export class AddUserDetailsComponent implements OnInit {

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dob: new FormControl(''),
    gender: new FormControl(null)
  });
  constructor(private userService: UserService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let userDetails = this.userForm.value;
    let payload = {
      fields :{
        "First Name": userDetails.firstName,
        "Last Name": userDetails.lastName,
        "Date of Birth": userDetails.dob,
        "Status": "Active",
        "Gender": userDetails.gender,
      }
    }
    this.postUserDetail(payload);
    this.userForm.reset();
  }

  postUserDetail(payload: any){
    let self = this;
    let resposne = this.userService.postUserDetail(payload).subscribe(data =>{
      if(data != null){
        self._snackBar.open('New User Got Added', 'Undo', {
          duration: 3000
        });
      }
    },error => {
      self._snackBar.open('New User was not Added', 'Undo', {
        duration: 3000
      });
    });
  }

}
