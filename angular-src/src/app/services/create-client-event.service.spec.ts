/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreateClientEventService } from './create-client-event.service';

describe('CreateClientEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateClientEventService]
    });
  });

  it('should ...', inject([CreateClientEventService], (service: CreateClientEventService) => {
    expect(service).toBeTruthy();
  }));
});
