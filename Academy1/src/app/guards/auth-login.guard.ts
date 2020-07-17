import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {

  constructor(
    private _storageService: StorageService,
    private router: Router

  ){
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
      if(this._storageService.isAuthenticated()){
        this._storageService.errorMessage = "Already log"
        
        alert(this._storageService.errorMessage)
        this.router.navigate(["songs"])
      }

      return !this._storageService.isAuthenticated();
    }
  }
  

