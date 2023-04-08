import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit {
  
  @Output() dismiss = new EventEmitter<void>();
  constructor(private el: ElementRef) {}

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }
  ngOnDestory() {
    this.el.nativeElement.remove();
  }
  onDismissClick() {
    this.dismiss.emit();
  }
}
