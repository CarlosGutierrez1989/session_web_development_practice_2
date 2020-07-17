import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { Session } from 'src/app/models/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MymodalComponent } from '../mymodal/mymodal.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupForm: FormGroup

  loginForm: FormGroup
  
  @Input() wantLog = true

  constructor(
    private _http: HttpService,
    private storageService: StorageService,
    private modalService: NgbModal,
    private _builder: FormBuilder,
    private router: Router,
    private headerComponent: HeaderComponent
  ) { 

    this.loginForm = this._builder.group(
      {
        name: ['', Validators.required],
        password: ['', Validators.required]
      }
    )

    this.signupForm = this._builder.group(
      {
        createuser_name: ['', Validators.required],
        createuser_email: ['', Validators.compose(
          [Validators.email,
          Validators.required]
         )],
        createuser_password: ['', Validators.required]
      }
    )

  }

  ngOnInit(): void {

  }




    
  //Method to open a modal
  open(message: String, number: number) {
    const modalRef = this.modalService.open(MymodalComponent);
    modalRef.componentInstance.my_modal_content = message
    modalRef.componentInstance.my_modal_title = "Create user"
    modalRef.componentInstance.number = number
  }


  //Methot to log
  login(){
    const user = (document.querySelector('#name') as HTMLInputElement).value
    const password = (document.querySelector('#password') as HTMLInputElement).value

    this._http.login(user, password).subscribe(
      response => {
      this.storageService.setCurrentSession(new Session(response))

      this.headerComponent.isLog = this.storageService.isAuthenticated()
      this.headerComponent.userLog = this.storageService.getCurrentUser()
      this.headerComponent.userLogEmail =this.storageService.getCurrentUser().email
      this.headerComponent.userLogName =this.storageService.getCurrentUser().name
      this.router.navigateByUrl('songs');

     },
     err => {
      this.open("User or password are wrong", -1)
      this.router.navigateByUrl('login');
     }
    )

  }

  // Create user method
  createUser(){
    const user = (document.querySelector('#createuser_name') as HTMLInputElement).value
    const email = (document.querySelector('#createuser_email') as HTMLInputElement).value
    const password = (document.querySelector('#createuser_password') as HTMLInputElement).value

    
    this._http.createUser(user, email, password).subscribe(
      response => {
      
      this.storageService.setCurrentSession(new Session(response))
      
      this.headerComponent.isLog = this.storageService.isAuthenticated()
      this.headerComponent.userLog = this.storageService.getCurrentUser()
      this.headerComponent.userLogEmail =this.storageService.getCurrentUser().email
      this.headerComponent.userLogName =this.storageService.getCurrentUser().name
      
      this.router.navigateByUrl('songs');

    },
    err => {
     this.open("Name alredy registred", -1)

    }
    )

  }



}

