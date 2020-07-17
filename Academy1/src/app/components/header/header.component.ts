import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { User } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _storageService: StorageService,
    private router: Router
  ) { }

  isLog: boolean 
  userLog: User 

  userLogName: String
  userLogEmail: String

  ngOnInit(): void {
    this.userLog = this._storageService.getCurrentUser()
    this.isLog = this._storageService.isAuthenticated()

    this.userLogName = this._storageService.getCurrentUser().name
    this.userLogEmail = this._storageService.getCurrentUser().email
   }

   logout(){
    this.userLog = null
    this.isLog = false

    this.userLogName = null
    this.userLogEmail = null

     this._storageService.removeCurrentSession()
     this.router.navigate(["login"])
   }



}
