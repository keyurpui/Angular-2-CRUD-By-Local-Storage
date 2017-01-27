import {  PipeTransform, Pipe } from '@angular/core';
import { User } from '../_models/user';

@Pipe({
    name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

    transform(value: User[], filterBy: string): User[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((user: User) =>
            user.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
