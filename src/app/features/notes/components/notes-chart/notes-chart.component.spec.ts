import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesChartComponent } from './notes-chart.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('NotesChartComponent', () => {
  let component: NotesChartComponent;
  let fixture: ComponentFixture<NotesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesChartComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(NotesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
