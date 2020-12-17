import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  formEditUser: FormGroup
  constructor(private route: ActivatedRoute,
              private userService: UsersService,
              private fb: FormBuilder,
              private router: Router) { }

  id = +this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
      let userEdit = this.userService.getUserById(this.id);
      this.formEditUser = this.fb.group({
        name: [userEdit.name],
        email: [userEdit.email],
        address: [userEdit.address],
        dob: [userEdit.dob]
      })
  }

  edit() {
    let data = this.formEditUser.value;
    this.userService.edit(this.id, data);
    this.router.navigate(['/users'])
  }

}
