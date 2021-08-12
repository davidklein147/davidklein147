import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRepetiComponent } from './daily-repeti.component';

describe('DailyRepetiComponent', () => {
  let component: DailyRepetiComponent;
  let fixture: ComponentFixture<DailyRepetiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyRepetiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyRepetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
