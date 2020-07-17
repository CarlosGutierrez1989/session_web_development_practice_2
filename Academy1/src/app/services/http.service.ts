import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

/* Interfaces */
import { User, Song, Artist } from '../interfaces/interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root' // Para que este a nivel de aplicacion
})

export class HttpService {

  constructor(
    private _http: HttpClient
  ) {  }



url_users: string =  'http://localhost:4000/api/user/'
url_login_user: string = 'http://localhost:4000/api/user/login'
url_create_user: string = 'http://localhost:4000/api/user/create'

url_get_songs = 'http://localhost:4000/api/song/'
url_create_song = 'http://localhost:4000/api/song/create'
url_like_songs = 'http://localhost:4000/api/song/like/'
url_dislike_songs = 'http://localhost:4000/api/song/dislike/'

url_artists = 'http://localhost:4000/api/artist/'
url_artist_by_id = 'http://localhost:4000/api/artist/read/'
url_create_artist = 'http://localhost:4000/api/artist/create'


/*  U S E R S  -  M E T H O D S */
  // Get all users
  getUsers(): Observable<User[]>{
    return this._http.get<User[]>(this.url_users)
  }

  //Login user from DB
  login(name: string, password: string): Observable<User>{
    return this._http.post<User>(this.url_login_user, {
      "name": name,
      "password": password,
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }

    }) 
  }

  //Create a new user
  createUser(name: string, email: string, password: string): Observable<User>{
    return this._http.post<User>(this.url_create_user, {
      name: name,
      email: email,
      password: password
    })
  }



/*  S O N G  -  M E T H O D S */
createSong(name, external_url, image, strDate, duration_ms, artists): Observable<Song> {

  return this._http.post<Song>(this.url_create_song, {
    name: name,
    external_url: external_url,
    image: image,
    release_date: strDate,
    duration_ms: duration_ms,
    popularity: '0',
    like: false,
    artists: artists
  })
}

likeSong(id: String): Observable<Song>{
  return this._http.put<Song>(this.url_like_songs + id,
  {
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  }
  )
}

dislikeSong(id: String): Observable<Song>{
  console.log(id)
  return this._http.put<Song>(this.url_dislike_songs + id,
  {
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  }
  )
}

getSongs(): Observable<Song[]>{
  return this._http.get<Song[]>(this.url_get_songs)
}


/*  A R T I S T S  -  M E T H O D S */
getArtist(): Observable<Artist[]>{
  return this._http.get<Artist[]>(this.url_artists)
}

getArtistById(id: String): Observable<Artist>{
  return this._http.get<Artist>(this.url_artist_by_id+id)
}


createArtist(name:String, WebPage:String): Observable<Artist> {
  return this._http.post<Artist>(this.url_create_artist, {
    name: name,
    href: WebPage,
  })
}
 

}
