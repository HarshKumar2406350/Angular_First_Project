import { Component ,computed,Input,input, Output,EventEmitter} from '@angular/core'

//ways to form a custom type in typescript

//Method 2
// type User = {
//   avatar: string;
//   name: string;
//   id: string;
// }

//Method 3
interface User {
  id : string;
  avatar : string;
  name : string;
}


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
      
      //method 1
      // @Input({required: true}) user !: {
      //   avatar: string;
      //   name: string;
      //   id: string;
      // }

      // method 2 & 3
      @Input({required : true}) user !: User;

      @Output() select = new EventEmitter<string>();

      inputPath = computed(() => {
      
        return 'assets/users/' + this.user.avatar;
      });
    

      onSelectUser() {
        this.select.emit(this.user.id);
      }
}
