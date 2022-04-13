import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeBodyComponent } from './equipe-body.component';

describe('EquipeBodyComponent', () => {
  let component: EquipeBodyComponent;
  let fixture: ComponentFixture<EquipeBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
