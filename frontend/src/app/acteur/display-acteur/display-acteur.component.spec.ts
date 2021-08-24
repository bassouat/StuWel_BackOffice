import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayActeurComponent } from './display-acteur.component';

describe('DisplayActeurComponent', () => {
  let component: DisplayActeurComponent;
  let fixture: ComponentFixture<DisplayActeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayActeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayActeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
