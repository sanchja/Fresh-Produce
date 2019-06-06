import { TestBed } from '@angular/core/testing';

import { ImgUrlService } from './img-url.service';

describe('ImgUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImgUrlService = TestBed.get(ImgUrlService);
    expect(service).toBeTruthy();
  });
});
