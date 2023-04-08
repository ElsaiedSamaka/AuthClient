import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AllTodosComponent } from './home/all-todos/all-todos.component';
import { CreateTodoComponent } from './home/create-todo/create-todo.component';
import { HomeComponent } from './home/home.component';
import { TodosDetailsComponent } from './home/todos-details/todos-details.component';
import { IndexRoutingModule } from './index-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    AllTodosComponent,
    TodosDetailsComponent,
    CreateTodoComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class IndexModule {}
