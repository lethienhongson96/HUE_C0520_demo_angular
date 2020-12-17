import {Component, OnInit} from '@angular/core';
import {IUser} from "../IUser";
import {split} from "ts-node";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  sizeImage = '100';
  showImage = 'block';
  p: number = 1;
  message: string;
  userFilter: IUser[] = []
  users: IUser[] = []

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.users = this.userService.getAll();
    this.userFilter = this.users
  }

  showHideImage() {
      if (this.showImage == 'none') {
        this.showImage = 'block'
      } else {
        this.showImage = 'none'
      }
  }

  search(event) {
    this.userFilter = (event) ? this.findUser(event) : this.users
  }

  findUser(keyword: string) {
    let data = [];
    for (let i = 0; i < this.users.length; i++) {
      if (keyword.toLowerCase() == this.users[i].name.toLowerCase()) {
          data.push(this.users[i]);
      }
    }
    return data;
  }

  delete(id: number):void {
    if (confirm('are you sure?')) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id == id) {
          this.users.splice(i, 1);
        }
      }
      this.message = 'Delete success!'
    }
  }

}
