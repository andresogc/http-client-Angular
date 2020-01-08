import { Component } from '@angular/core';
import { TaskService } from "./services/task.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULAR-HTTP-CLIENT';

  constructor(private taskService:TaskService){}

  getAllTasks(){
    this.taskService.getAllTasks()
    .subscribe(tasks => {
      console.log(tasks);
    });
  }

  getTask(){
    this.taskService.getTask('1')
    .subscribe(task => {
      console.log(task);
    });
  }

  createTask(){
    const task ={

      userId:'1',
      title:'change title',
      completed:true
    };
    this.taskService.createTask(task)
    .subscribe((newTask)=> {
      console.log(newTask);
    });
  }

  updateTask(){
    const task ={
      id:'199',
      userId:'1',
      title:'por otro title',
      completed:true
    };
    this.taskService.updateTask(task)
    .subscribe((newTask)=> {
      console.log(newTask);
    });
  }

  deleteTask(){
    this.taskService.deleteTask('1')
    .subscribe((data) => {
      console.log(data);
    });
  }


}
