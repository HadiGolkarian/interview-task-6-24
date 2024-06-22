import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesChartComponent } from './notes-chart.component';

describe('NotesChartComponent', () => {
  let component: NotesChartComponent;
  let fixture: ComponentFixture<NotesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
