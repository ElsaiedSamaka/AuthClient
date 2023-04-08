import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { ModelComponent } from './model/model.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

@NgModule({
  declarations: [InputComponent, PlaceholderComponent, ModelComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputComponent, PlaceholderComponent, ModelComponent],
})
export class SharedModule {}
