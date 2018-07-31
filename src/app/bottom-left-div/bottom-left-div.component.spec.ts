import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomLeftDivComponent } from './bottom-left-div.component';

describe('BottomLeftDivComponent', () => {
  let component: BottomLeftDivComponent;
  let fixture: ComponentFixture<BottomLeftDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomLeftDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomLeftDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
