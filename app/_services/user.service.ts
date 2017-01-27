import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { User } from '../_models/user';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        let users: User[] = [];
        let storageUser = localStorage.getItem('users');
        if(storageUser){
            users = JSON.parse(storageUser)
        }
        return this.http.get('/api/users.json').map((response: Response) => users);
    }

    getById(id: number) {
        let updateUser = {};
        let storageUser = JSON.parse(localStorage.getItem('users'));
        
        if(storageUser){
            updateUser = storageUser[id];
        }
        return this.http.get('/api/edit_users.json?'+id).map((response: Response) => updateUser);
    }

    create(user: User) {
        let users: User[] = [];
        let userArrayObj: Array<{}> = [];
        let storageUser = localStorage.getItem('users');
        if(storageUser){
            
            userArrayObj = JSON.parse(storageUser);
            user['id'] = userArrayObj.length + 1;
            userArrayObj.push(user);
        }else{
            user['id'] = 1;
            userArrayObj.push(user);
        }
        
        localStorage.setItem('users', JSON.stringify(userArrayObj));
       return this.http.post('/api/users.json', user).map((response: Response) => userArrayObj);
    }

    update(user: User, index: any) {
        let storageUser = JSON.parse(localStorage.getItem('users'));
        storageUser[index] = user;
        localStorage.setItem('users', JSON.stringify(storageUser));
        return this.http.put('/api/users.json?' + user.id, user).map((response: Response) => storageUser);
    }

    delete(id: any) {
        let storageUser = JSON.parse(localStorage.getItem('users'));
        storageUser.splice(id, 1);
        let storageUserString = (storageUser.length > 0) ? JSON.stringify(storageUser) : '';
        localStorage.setItem('users', storageUserString);            
        return this.http.get('/api/users.json?' + id).map((response: Response) => storageUser);
    }

}