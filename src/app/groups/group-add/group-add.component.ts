import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GroupService} from "../../services/group.service";
import {HttpResult} from "../../core/http-result";
import {Router} from "@angular/router";

@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.css']
})
export class GroupAddComponent implements OnInit {

  formAddGroup: FormGroup
  constructor(private fb: FormBuilder,
              protected groupService: GroupService,
              protected router: Router) { }

  ngOnInit(): void {
    this.formAddGroup = this.fb.group({
      name: ['', Validators.required]
    })
  }

  submit() {
    let data = this.formAddGroup.value;
    this.groupService.create(data).subscribe((res:HttpResult) =>{
        if (res.status === 'success') {
            this.router.navigate(['groups'])
        }
    })
  }

  get name() {
    return this.formAddGroup.get('name');
  }

}
