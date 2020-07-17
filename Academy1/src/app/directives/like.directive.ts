import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Song } from '../interfaces/interfaces';

@Directive({
  selector: '[LikeDirective]'
})
export class LikeDirective {

  constructor(
    public el: ElementRef,
    public renderer: Renderer2,
    private _http: HttpService
  ) { }

  @Input() like: boolean
  @Input() id: string

  @HostListener('click') onClick(){
    this.likeSong()
  }

  likeSong(){
 
    if(this.like){
      this.renderer.removeClass(this.el.nativeElement, 'fa-heart');
      this.renderer.addClass(this.el.nativeElement, 'fa-heart-o');
      
    
      this._http.dislikeSong(this.id).subscribe((response: Song) =>{
        this.like = false
      })

    }else{
      this.renderer.removeClass(this.el.nativeElement, 'fa-heart-o');
      this.renderer.addClass(this.el.nativeElement, 'fa-heart');

      this._http.likeSong(this.id).subscribe((response: Song) =>{
        this.like = true
      })

    }
  }
  

  ngOnInit(){
    
    if(this.like){
      this.renderer.addClass(this.el.nativeElement, 'fa-heart');

    }else{
      this.renderer.addClass(this.el.nativeElement, 'fa-heart-o');
    }
  }

}
