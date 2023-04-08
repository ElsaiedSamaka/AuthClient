import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTodosComponent } from './home/all-todos/all-todos.component';
import { HomeComponent } from './home/home.component';
import { TodosDetailsComponent } from './home/todos-details/todos-details.component';
import { TaskResolverService } from './task-resolver.service';
import { NotFoundComponent } from '../shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      // { path: '', component: PlaceholderComponent },
      // { path: '', redirectTo: 'all-todos', pathMatch: 'full' },
      {path:'not-found', component:NotFoundComponent},
      {
        path: ':id',
        component: TodosDetailsComponent,
        resolve: { task: TaskResolverService },
      },
      { path: '', component: AllTodosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}
