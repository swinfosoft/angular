import { Component, OnInit } from '@angular/core';
import { UserService, Profile } from '../shared';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:Profile;
  constructor(private userService:UserService) 
  { 
    this.profile=this.userService.profile;
  }

  ngOnInit() {
    
  }

}
