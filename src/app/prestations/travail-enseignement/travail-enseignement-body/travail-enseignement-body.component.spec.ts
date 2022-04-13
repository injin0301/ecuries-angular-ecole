import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravailEnseignementBodyComponent } from './travail-enseignement-body.component';

describe('TravailEnseignementBodyComponent', () => {
  let component: TravailEnseignementBodyComponent;
  let fixture: ComponentFixture<TravailEnseignementBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravailEnseignementBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravailEnseignementBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
