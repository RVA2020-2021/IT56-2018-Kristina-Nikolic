import { TestBed } from '@angular/core/testing';

import { DepartmanService } from './departman.service';

describe('DepartmanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmanService = TestBed.get(DepartmanService);
    expect(service).toBeTruthy();
  });
});
