import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
import { LoginComponent } from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _storageService: StorageService,
    private router: Router
  ){

  }

  canActivate(
    //Datos de la siguiente ruta
    next: ActivatedRouteSnapshot,
    //Datos del router actual (ruta e hijos)
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(!this._storageService.isAuthenticated()){
      this._storageService.errorMessage = "User not auth"
      this.router.navigate(["login"])
      alert(this._storageService.errorMessage)
    }

    return this._storageService.isAuthenticated();
  }
  
}
