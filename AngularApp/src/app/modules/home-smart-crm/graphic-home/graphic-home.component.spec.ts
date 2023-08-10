import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicHomeComponent } from './graphic-home.component';

describe('GraphicHomeComponent', () => {
  let component: GraphicHomeComponent;
  let fixture: ComponentFixture<GraphicHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphicHomeComponent]
    });
    fixture = TestBed.createComponent(GraphicHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
