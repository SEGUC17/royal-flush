// <<<<<<< HEAD
import { TestBed, inject } from '@angular/core/testing';

// =======
// /* tslint:disable:no-unused-variable */

// import { TestBed, async, inject } from '@angular/core/testing';
// >>>>>>> f1d3e2d180b4d1a2f1311d8ec95e74d4de216215
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
