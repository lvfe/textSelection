import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntextComponent } from './intext.component';

describe('IntextComponent', () => {
  let component: IntextComponent;
  let fixture: ComponentFixture<IntextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
