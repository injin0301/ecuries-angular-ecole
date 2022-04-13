import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationsBodyComponent } from './installations-body.component';

describe('InstallationsBodyComponent', () => {
  let component: InstallationsBodyComponent;
  let fixture: ComponentFixture<InstallationsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallationsBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
