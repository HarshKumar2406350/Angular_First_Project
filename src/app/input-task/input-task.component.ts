import { Component ,EventEmitter,Input,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-input-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-task.component.html',
  styleUrl: './input-task.component.css'
})
export class InputTaskComponent {

  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<{
            title : string;summary:string;date:string;}
        >();

  enteredTitle = "";
  enteredSummary= "";
  enteredDueDate="";

  onCancel () {
    this.cancel.emit();
  }

  onSubmit () {
      this.add.emit({
        title : this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDueDate
      });
  }
  
}
