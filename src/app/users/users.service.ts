import { Subject } from 'rxjs';
import { User } from './user.model';

export class UsersService{
    userEntry = new Subject();
    activateEdit = new Subject();
    usersList: User[]=[];
    entryIndex:number = -1;

    insertEntry(data: User){
        if(this.entryIndex>-1){
            this.usersList[this.entryIndex]=data;
        }
        else{
            this.usersList.push(data);
        }
        this.userEntry.next(this.usersList.slice());
    }

    updateIndex(index: number){
        this.entryIndex = index;
        this.activateEdit.next(this.usersList[this.entryIndex]);
    }

    deleteEntry(index: number){
        this.usersList.splice(index,1);
        this.userEntry.next(this.usersList.slice());
    }

    getUsers(){
        return this.usersList.slice();
    }

    setUsers(data: User[]){
        this.usersList = data;
        this.userEntry.next(this.usersList.slice());
    }

}