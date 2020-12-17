import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  formAddUser: FormGroup;
  constructor(private fb: FormBuilder,
              private userService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.formAddUser = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      address: ['',[Validators.required]],
      dob: ['',[Validators.required]]
    })
  }

  submit() {
    let data = this.formAddUser.value;
    this.userService.add(data);
    this.router.navigate(['/users'])
  }

  get name() {
    return this.formAddUser.get('name');
  }

  get email() {
    return this.formAddUser.get('email');
  }
}
