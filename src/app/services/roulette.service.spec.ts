import { TestBed } from '@angular/core/testing';

import { RouletteService } from './roulette.service';

describe('RouletteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouletteService = TestBed.get(RouletteService);
    expect(service).toBeTruthy();
  });
});
