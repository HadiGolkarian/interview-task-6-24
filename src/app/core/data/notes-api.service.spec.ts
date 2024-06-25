import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { NotesApiService } from './notes-api.service';

describe('NotesApiService', () => {
  let service: NotesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting() 
     ]
    });
    service = TestBed.inject(NotesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
