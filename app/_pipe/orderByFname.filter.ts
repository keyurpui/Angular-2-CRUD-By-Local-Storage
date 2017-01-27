import { PipeTransform,Pipe } from '@angular/core';
import { User } from '../_models/user';

@Pipe({
    name: "orderby"
})
export class OrderByPipe implements PipeTransform {
    transform(value: User[]): User[]  {
        value.sort((a: User, b: User) => {
            if (a.firstName < b.firstName) {
                return -1;
            } else if (a.firstName > b.firstName) {
                return 1;
            } else {
                return 0;
            }
        });
        return value;
    }
}