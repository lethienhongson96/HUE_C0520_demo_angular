import {Component, OnInit} from '@angular/core';
import {GroupService} from "../../services/group.service";
import {IGroup} from "../IGroup";
import {HttpResult} from "../../core/http-result";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  message;
  groups: IGroup[];

  constructor(private groupService: GroupService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.groupService.getAll().subscribe((res: HttpResult) => {
      if (res.status === 'cusses') {
        this.groups = res.data
      }
    })
  }

  delete(id) {
    if (confirm('are you sure?')) {
      this.groupService.delete(id).subscribe((res: HttpResult) => {
        if (res.status === 'success') {
          this.message = res.message;
          this.getAll();
        }
      })
    }
  }

}
