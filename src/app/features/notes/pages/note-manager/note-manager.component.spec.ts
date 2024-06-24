import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { NoteManagerComponent } from './note-manager.component';

describe('NoteManagerComponent', () => {
  let component: NoteManagerComponent;
  let fixture: ComponentFixture<NoteManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteManagerComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(NoteManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
