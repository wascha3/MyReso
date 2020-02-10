import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsCategoriesComponent } from './ingredients-categories.component';

describe('IngredientsCategoriesComponent', () => {
  let component: IngredientsCategoriesComponent;
  let fixture: ComponentFixture<IngredientsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
