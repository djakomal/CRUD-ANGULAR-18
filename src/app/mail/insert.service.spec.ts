import { TestBed } from '@angular/core/testing';

import { InsertService } from './insert.service';

describe('InsertService', () => {
  let service: InsertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
