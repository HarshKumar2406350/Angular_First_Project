import { Component ,computed,Input,input} from '@angular/core';

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


      inputPath = computed(() => {
        return 'avatar/users/' + this.avatar();
      });
    

      onSelectUser() {
        
      }
}
