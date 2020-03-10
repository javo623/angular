import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesubComponent } from './tablesub.component';

describe('TablesubComponent', () => {
  let component: TablesubComponent;
  let fixture: ComponentFixture<TablesubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
