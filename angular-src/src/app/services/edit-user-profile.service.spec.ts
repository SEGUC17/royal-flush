/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditUserProfileService } from './edit-user-profile.service';

describe('EditUserProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditUserProfileService]
    });
  });

  it('should ...', inject([EditUserProfileService], (service: EditUserProfileService) => {
    expect(service).toBeTruthy();
  }));
});
