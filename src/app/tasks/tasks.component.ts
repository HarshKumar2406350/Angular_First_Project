import { Component,Input, Output,EventEmitter } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { InputTaskComponent } from '../input-task/input-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,InputTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) id!: string;

  isAddingtask : boolean= false;
  

  @Output() addTask = new EventEmitter<boolean>();
  

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title : 'Master Cooking',
      summary: 'Learn all the basic of cooking',
      dueDate: "2025-12-31"
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ] 

  get selectedUserTasks(){
    return this.tasks.filter(
      (task) => task.userId === this.id
    );
  }

  onCompleteTask(id : string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingtask = true;
  }

  onCancelAddtask(){
    this.isAddingtask = false;
  }

  onAddTask(taskData: {
    title : string;
    summary:string;
    date:string;
  }) {
    this.tasks.unshift({
      id : new Date().getTime().toString(),
      userId: this.id,
      title : taskData.title,
      summary:taskData.summary,
      dueDate: taskData.date
    })
    this.isAddingtask=false;
  }

}
