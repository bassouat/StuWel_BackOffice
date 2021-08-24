import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTemoignageComponent } from './display-temoignage.component';

describe('DisplayTemoignageComponent', () => {
  let component: DisplayTemoignageComponent;
  let fixture: ComponentFixture<DisplayTemoignageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTemoignageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTemoignageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
