import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNotesComponent } from './search-notes.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('SearchNotesComponent', () => {
  let component: SearchNotesComponent;
  let fixture: ComponentFixture<SearchNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchNotesComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
