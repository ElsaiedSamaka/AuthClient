import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  ngOnInit() {}
  @Input() current: number = 0;
  @Input() total: number = 0;
  @Input() totalPages: number = 0;

  @Output() goTo: EventEmitter<number> = new EventEmitter<number>();
  @Output() next: EventEmitter<number> = new EventEmitter<number>();
  @Output() previous: EventEmitter<number> = new EventEmitter<number>();

  public pages: number[] = [];
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['current'] && changes['current'].currentValue) ||
      (changes['total'] && changes['total'].currentValue)
    ) {
      this.pages = this.getPages(this.current, this.total);
    }
  }
  public onGoTo(page: number): void {
    this.goTo.emit(page);
  }

  public onNext(): void {
    console.log(this.current);
    this.next.emit(this.current);
  }

  public onPrevious(): void {
    console.log(this.current);
    this.previous.next(this.current);
  }
  // right now we are getting our pages in the following format:
  private getPages(current: number, total: number): number[] {
    if (total <= 7) {
      return [...Array(total)].map((x) => ++x);
    }

    if (current > 5) {
      if (current >= total - 4) {
        return [
          1,
          -1,
          total - 4,
          total - 3,
          total - 2,
          total - 1,
          this.totalPages,
        ];
      } else {
        return [1, -1, current - 1, current, current + 1, -1, this.totalPages];
      }
    }

    return [1, 2, 3, 4, 5, -1, this.totalPages];
  }
}
