import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLeftDivComponent } from './top-left-div.component';

describe('TopLeftDivComponent', () => {
  let component: TopLeftDivComponent;
  let fixture: ComponentFixture<TopLeftDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLeftDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLeftDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
