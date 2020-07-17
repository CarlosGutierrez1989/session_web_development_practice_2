import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Song } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  constructor(
    private _http: HttpService
    ) { 

    }

  songs: Song[] = []
  song: Song

  ngOnInit(): void {
    //Get songs from DB
    this._http.getSongs().subscribe((response: Song[]) =>{
      this.songs = response
      this.song = response[0]
    })
  }

  actualSong(event, item){
    this.song = item;
  }
}
