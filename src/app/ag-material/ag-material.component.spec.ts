import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgMaterialComponent } from './ag-material.component';

describe('AgMaterialComponent', () => {
  let component: AgMaterialComponent;
  let fixture: ComponentFixture<AgMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
