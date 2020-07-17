import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';
import { MymodalComponent } from '../mymodal/mymodal.component';
import { StorageService } from 'src/app/services/storage.service';
import { User } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.css']
})
export class CreateArtistComponent implements OnInit {

  constructor(
    private _http: HttpService,
    private modalService: NgbModal,
    private _storageService: StorageService,
    private router: Router
  ) { }

  isLog: boolean
  userLog: User

  ngOnInit(): void {
    this.isLog = this._storageService.isAuthenticated()
    this.userLog = this._storageService.getCurrentUser()

  }

name: String = ''
web_page: String = ''

//Method to create a new Singer
  createArtist(){
    const name = (document.querySelector('#name') as HTMLInputElement).value
    const web_page = (document.querySelector('#web_page') as HTMLInputElement).value

    this._http.createArtist(name, web_page).subscribe(

      response => {
        this.open("SUCCESS", 1)
        this.router.navigateByUrl('/songs/addsong')
      },
      (err: HttpErrorResponse) => {
        this.open("ERROR " +err.message, -1)
      }
    )

  }

  
    //Method to open modal
    open(message: String, number: number) {
      const modalRef = this.modalService.open(MymodalComponent);

      modalRef.componentInstance.my_modal_content = message
      modalRef.componentInstance.my_modal_title = "Artist saved"
      modalRef.componentInstance.number = number
    }
}
