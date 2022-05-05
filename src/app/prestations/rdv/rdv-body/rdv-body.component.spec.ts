import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvBodyComponent } from './rdv-body.component';

describe('RdvBodyComponent', () => {
  let component: RdvBodyComponent;
  let fixture: ComponentFixture<RdvBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
