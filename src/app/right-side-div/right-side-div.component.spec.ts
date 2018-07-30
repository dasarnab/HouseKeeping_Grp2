import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideDivComponent } from './right-side-div.component';

describe('RightSideDivComponent', () => {
  let component: RightSideDivComponent;
  let fixture: ComponentFixture<RightSideDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSideDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
