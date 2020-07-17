import { User } from '../interfaces/interfaces';

export class UserModel {
    constructor(){
        this.username = '';
        this.password = '';
        this.email = '';
    }
    public username;
    public password;
    public email;
}

export class Session {
    constructor(user: User){
        this.user = user
    }

    public user: User;
  }