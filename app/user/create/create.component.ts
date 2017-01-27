import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, UserService } from '../../_services/index';
import { User } from '../../_models/user';

@Component({
    moduleId: module.id,
    templateUrl: 'create.component.html'
})

export class CreateComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
        
    }

    createUser(){
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Create user successful', true);
                    this.router.navigate(['/']);
                },
                error => {
                    this.alertService.success('Create user successful', true);
                    this.router.navigate(['/']);
                    //this.alertService.error(error);
                    //this.loading = false;
                });
    }

}
