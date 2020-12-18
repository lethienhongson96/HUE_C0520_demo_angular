import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GroupService} from "../../services/group.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpResult} from "../../core/http-result";

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {
  formEditGroup: FormGroup
  id = +this.route.snapshot.paramMap.get('id');

  constructor(private fb: FormBuilder,
              private groupService: GroupService,
              private route: ActivatedRoute,
              private router: Router) {
  }


  ngOnInit(): void {
    this.formEditGroup = this.fb.group({
      name: ['', [Validators.required]]
    })
    this.groupService.findById(this.id).subscribe((res: HttpResult) => {
      if (res.status == 'success') {
        let group = res.data;
        this.formEditGroup.patchValue({
          name: group.name
        })
      }
    })
  }

  submit() {
    let data = this.formEditGroup.value;
    this.groupService.edit(data, this.id).subscribe((res: HttpResult) => {
      if (res.status == 'success') {
        this.router.navigate(['groups'])
      }
    })
  }

  get name() {
    return this.formEditGroup.get('name');
  }

}
