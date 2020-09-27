import { TestBed } from '@angular/core/testing';

import { ElvysRodService } from './elvys-rod.service';

describe('ElvysRodService', () => {
  let service: ElvysRodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElvysRodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
