import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadespireCreateComponent } from './shadespire-create.component';

describe('ShadespireCreateComponent', () => {
  let component: ShadespireCreateComponent;
  let fixture: ComponentFixture<ShadespireCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadespireCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadespireCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
