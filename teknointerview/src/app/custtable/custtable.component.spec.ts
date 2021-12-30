import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusttableComponent } from './custtable.component';

describe('CusttableComponent', () => {
  let component: CusttableComponent;
  let fixture: ComponentFixture<CusttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusttableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
