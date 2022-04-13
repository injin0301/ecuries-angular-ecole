import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulesTarifsBodyComponent } from './formules-tarifs-body.component';

describe('FormulesTarifsBodyComponent', () => {
  let component: FormulesTarifsBodyComponent;
  let fixture: ComponentFixture<FormulesTarifsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulesTarifsBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulesTarifsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
