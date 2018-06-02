import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user-service.service';

describe('UserServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserServiceService) => {
    expect(service).toBeTruthy();
  }));
});
