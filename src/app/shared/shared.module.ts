import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { ModelComponent } from './model/model.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

@NgModule({
  declarations: [
    InputComponent,
    PlaceholderComponent,
    ModelComponent,
    PaginationComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    PlaceholderComponent,
    ModelComponent,
    PaginationComponent,
  ],
})
export class SharedModule {}
