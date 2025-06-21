import { Component ,computed,Input,input, Output,EventEmitter} from '@angular/core';


//import { DUMMY_USERS } from '../dummy-users';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
      
      // avatar = input<string>('defaultValue');
      // name = input<string>('defaultValue');

      avatar = input.required<string>();
      name = input.required<string>();
      id = input.required<string>();

      @Output() select = new EventEmitter<string>();
      //select = output<String>(); using signal output

      inputPath = computed(() => {
        return 'assets/users/' + this.avatar();
      });
    

      onSelectUser() {
        this.select.emit(this.id());
      }
}
