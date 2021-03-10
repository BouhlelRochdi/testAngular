import { TestBed } from '@angular/core/testing';

import { ParamPostService } from './param-post.service';

describe('ParamPostService', () => {
  let service: ParamPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParamPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
