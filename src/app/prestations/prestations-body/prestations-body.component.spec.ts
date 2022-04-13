import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationsBodyComponent } from './prestations-body.component';

describe('PrestationsBodyComponent', () => {
  let component: PrestationsBodyComponent;
  let fixture: ComponentFixture<PrestationsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationsBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestationsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
