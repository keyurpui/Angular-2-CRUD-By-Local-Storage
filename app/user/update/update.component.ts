import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AlertService, UserService } from '../../_services/index';
import { User } from '../../_models/user';

@Component({
    moduleId: module.id,
    templateUrl: 'update.component.html',
    styleUrls: ['update.component.css']

})

export class UpdateComponent implements OnInit {
    model: any = {};
    loading = false;
    userId: number = 0
    
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.route.params
        .subscribe((params: Params) => {
            this.userId = params["id"];
        });
        this.userService.getById(this.userId).subscribe(users => { this.model = users; });
    }
    
    updateUser(){
        
        this.loading = true;
        this.userService.update(this.model, this.userId)
            .subscribe(
                data => {
                    this.alertService.success('User Updated successful', true);
                    this.router.navigate(['/']);
                },
                error => {
                    this.alertService.success('User Updated successful', true);
                    this.router.navigate(['/']);
                    //this.alertService.error(error);
                    //this.loading = false;
                });
    }

}
