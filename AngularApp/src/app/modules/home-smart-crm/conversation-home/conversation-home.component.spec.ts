import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationHomeComponent } from './conversation-home.component';

describe('ConversationHomeComponent', () => {
  let component: ConversationHomeComponent;
  let fixture: ComponentFixture<ConversationHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConversationHomeComponent]
    });
    fixture = TestBed.createComponent(ConversationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
