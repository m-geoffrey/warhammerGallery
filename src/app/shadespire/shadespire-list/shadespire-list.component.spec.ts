import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadespireListComponent } from './shadespire-list.component';

describe('ShadespireListComponent', () => {
  let component: ShadespireListComponent;
  let fixture: ComponentFixture<ShadespireListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadespireListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadespireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
