/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaskResolverService } from './task-resolver.service';

describe('Service: TaskResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskResolverService]
    });
  });

  it('should ...', inject([TaskResolverService], (service: TaskResolverService) => {
    expect(service).toBeTruthy();
  }));
});
