import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';


import { AlertComponent } from './_directives/index';
import { AlertService, UserService } from './_services/index';
import { ListComponent } from './user/list/index';
import { CreateComponent } from './user/create/index';
import { UpdateComponent } from './user/update/index';
import { UserFilterPipe } from './_pipe/user.filter';
import { OrderByPipe } from './_pipe/orderByFname.filter';





@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        ListComponent,
        CreateComponent,
        UpdateComponent,
        UserFilterPipe,
        OrderByPipe
    ],
    providers: [
        AlertService,
        UserService,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }