import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Artist, Song, DateCustom } from 'src/app/interfaces/interfaces';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';
import { MymodalComponent } from '../mymodal/mymodal.component';


@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})

export class AddSongComponent implements OnInit {

  constructor(
    private _http: HttpService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this._http.getArtist().subscribe(response => {
      this.categories = response
      
    })
   }

  song_date: DateCustom
  categories: Artist[] = [ ]
  selected: Artist[] = []
  song: Song
  artistArray: Artist[] = []

  // Method to create a new song
  createSong(){
    const name = (document.querySelector('#song_name') as HTMLInputElement).value
    const external_url = (document.querySelector('#song_external_url') as HTMLInputElement).value
    const release_date = this.song_date
    const duration_ms = (document.querySelector('#song_duration_ms') as HTMLInputElement).value
    const image = (document.querySelector('#song_image') as HTMLInputElement).value
    const strDate = release_date.year + "-" + release_date.month + "-" +  release_date.day
    
    this._http.createSong(name, external_url, image, strDate, duration_ms, this.selected).subscribe(
      response => {
        this.open("SUCCESS", 1)
      },
      (err: HttpErrorResponse) => {
        this.open("ERROR " +err.message, -1)

      }
    )

    }
  
    // Method to open a modal.
    open(message: String, number: number) {
      const modalRef = this.modalService.open(MymodalComponent);

      modalRef.componentInstance.my_modal_content = message
      modalRef.componentInstance.my_modal_title = "Song saved"
      modalRef.componentInstance.number = number
    }

}
