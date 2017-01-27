import { Component, OnInit } from '@angular/core';
//import { Injectable } from '@angular/core';
//import { Http, Headers, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { User } from '../../_models/user';
import { UserService,AlertService } from '../../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'list.component.html'
})


export class ListComponent implements OnInit {
    //currentUser: User;
    listFilter: string;
    users: User[] = [];

    constructor(private userService: UserService,private alertService: AlertService) {
        //this.currentUser = {"id": 1, "username": "laxmi", "firstName": "laxmiaknt", "password": "123", "lastName": "kkant"};//JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(index: number) {
        if(confirm("Are you sure, you want to delete this user?")){
            this.userService.delete(index).subscribe(() => {
                this.alertService.success('Deleted user successful', true);
                this.loadAllUsers()
            });
        }
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}