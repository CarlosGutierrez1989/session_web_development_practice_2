import { Component, OnInit } from '@angular/core';


/* Services */
import { HttpService } from 'src/app/services/http.service';

/* Interfaces */
import { User } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    public _http: HttpService
  ) { }

  //Rand images list
  user_images: String[] = [
    'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
    'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png',
    'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_03.png',
    'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_05.png'
  ]
  //Rand music list
  music: String[] = ['Rock', 'Jazz', 'Dubstep', 'Techno', 'Country', 'Rap', 'Electro', 'Reggeton']

  usuarios: User[] = []
  
  ngOnInit(): void {
    //Get Users from DB
    this._http.getUsers().subscribe((response: User[]) => this.usuarios = response)
  }

  generateRandImage(): String{
    const num = Math.floor(Math.random() * 4)  
    return this.user_images[num]
  }

  musics(){
    const num = Math.floor(Math.random() * 7)  
    return this.music[num]
  }

}
