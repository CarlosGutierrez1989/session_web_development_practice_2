import { Injectable } from '@angular/core';
import { Session} from '../models/models';
import { User } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})

export class StorageService {

  private localStorageService
  private currentSession: Session = null

  public errorMessage: String

  constructor() {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();

   }


  setCurrentSession(session: Session): void {
    this.currentSession = session;
    this.localStorageService.setItem('currentUser', JSON.stringify(session));
  }

  loadSessionData(): Session{
    var sessionStr = this.localStorageService.getItem('currentUser');
    return (sessionStr) ? <Session> JSON.parse(sessionStr) : null;
  }

  getCurrentSession(): Session {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSession = null;
  }

  getCurrentUser(): User {
    var session: Session = this.getCurrentSession();
    return session.user
  }

  isAuthenticated(): boolean {
    var session: Session = this.getCurrentSession();
    
    if(session == null){
      return false
    }
    return true
  }

  logout(): void{
    this.removeCurrentSession();
  }

}
