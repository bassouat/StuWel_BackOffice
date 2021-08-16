import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayArticleComponent } from './article.component';

describe('ArticleComponent', () => {
  let component: DisplayArticleComponent;
  let fixture: ComponentFixture<DisplayArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
