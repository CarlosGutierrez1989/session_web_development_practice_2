import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sortLike: boolean = false

  like(){
    if(this.sortLike){
      this.sortLike = false
    }else{
      this.sortLike = true
    }
  }

  //Albums array
  albums: Album[] =[
    {
      id: 1,
      name: 'PODCAST',
      image: 'https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg',
      like: Math.floor(Math.random() * 4000) + 1
    },
    {
      id: 2,
      name: 'WORKOUT',
      image: 'https://t.scdn.co/images/0093f59664854b619e34a51d39d35a2f.jpeg',
      like: Math.floor(Math.random() * 4000) + 1
    },
    {
      id: 3,
      name: 'ROCK',
      image: 'https://t.scdn.co/images/31c85ae6fec34a16927ef28a7a88e97b.jpeg',
      like: Math.floor(Math.random() * 4000) + 1
    },
    {
      id: 4,
      name: 'CHILL',
      image: 'https://t.scdn.co/images/2470fe22d03a4375a9501dce8cfb2b8c.jpeg',
      like: Math.floor(Math.random() * 4000) + 1
    },
    {
      id: 5,
      name: 'INDIE',
      image: 'https://t.scdn.co/images/4100c80f8efb45a38eb26b42aef401fa.jpeg',
      like: Math.floor(Math.random() * 4000) + 1
    },
    {
      id: 6,
      name: 'PARTY',
      image: 'https://t.scdn.co/images/d6cf42772b014925b59ee2a247a9850a.jpeg',
      like: Math.floor(Math.random() * 4000) + 1
      
    },
    {
      id: 7,
      name: 'FOCUS',
      image: 'https://t.scdn.co/images/cf23ab0343e047daa88703e21c01a4aa.jpeg',
      like: Math.floor(Math.random() * 4000) + 1
      
    },
    {
      id: 8,
      name: 'TEASTEMAKER',
      image: 'https://t.scdn.co/images/7ef1d6445a684e30bdd78f09507d688c.jpeg',
      like: Math.floor(Math.random() * 4000) + 1
    },
    {
      id: 9,
      name: 'SLEEP',
      image: 'https://t.scdn.co/images/6c53e335de834419a521e776668cca75.jpeg',
      like: Math.floor(Math.random() * 4000) + 1
    },
    {
      id: 10,
      name: 'METAL',
      image: 'https://t.scdn.co/images/ffbc60a80ba64554ac09130827c43d06.jpeg',
      like: Math.floor(Math.random() * 4000) + 1
    }

  ]

}


