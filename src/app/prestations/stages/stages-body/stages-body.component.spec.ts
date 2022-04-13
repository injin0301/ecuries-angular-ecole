import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesBodyComponent } from './stages-body.component';

describe('StagesBodyComponent', () => {
  let component: StagesBodyComponent;
  let fixture: ComponentFixture<StagesBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagesBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagesBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
