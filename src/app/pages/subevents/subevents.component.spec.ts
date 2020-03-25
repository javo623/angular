import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubeventsComponent } from './subevents.component';

describe('SubeventsComponent', () => {
  let component: SubeventsComponent;
  let fixture: ComponentFixture<SubeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
