import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadespireComponent } from './shadespire.component';

describe('ShadespireComponent', () => {
  let component: ShadespireComponent;
  let fixture: ComponentFixture<ShadespireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadespireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadespireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
