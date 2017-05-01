// <<<<<<< HEAD
import { TestBed, inject } from '@angular/core/testing';

// =======
// /* tslint:disable:no-unused-variable */

// import { TestBed, async, inject } from '@angular/core/testing';
// >>>>>>> f1d3e2d180b4d1a2f1311d8ec95e74d4de216215
import { ValidateService } from './validate.service';

describe('ValidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateService]
    });
  });

  it('should ...', inject([ValidateService], (service: ValidateService) => {
    expect(service).toBeTruthy();
  }));
});
