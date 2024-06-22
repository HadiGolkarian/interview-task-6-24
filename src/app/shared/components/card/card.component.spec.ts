import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CardComponent } from './card.component';

@Component({
  template: `
    <app-card>
      <div class="card-content">
        <p>content of the card</p>
      </div>
    </app-card>
  `,
})
class TestHostComponent {}

describe('CardComponent', () => {
  let cardComponent: CardComponent;
  let cardContent: DebugElement;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    cardComponent = fixture.debugElement.query(
      By.directive(CardComponent)
    ).componentInstance;
    cardContent = fixture.debugElement.query(By.css('.card-content'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(cardComponent).toBeTruthy();
  });

  it('should project content', () => {
    const cardText = cardContent.query(By.css('p')).nativeElement.textContent;

    expect(cardText).toContain('content of the card');
  });
});
