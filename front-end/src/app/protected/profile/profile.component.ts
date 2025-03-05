import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/classes/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: User
  public constructor(private authSrv: AuthService){
    this.currentUser = Object.create(null);
  }

  ngOnInit(): void {
    this.currentUser = this.authSrv.currentUserValue
  }
}
