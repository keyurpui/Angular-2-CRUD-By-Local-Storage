import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './user/list/index';
import { CreateComponent } from './user/create/index';
import { UpdateComponent } from './user/update/index';

const appRoutes: Routes = [
    { path: '', component: ListComponent },
    { path: 'create', component: CreateComponent },
    { path: 'update/:id', component: UpdateComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);