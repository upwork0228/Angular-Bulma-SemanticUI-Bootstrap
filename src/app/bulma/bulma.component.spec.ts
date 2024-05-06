import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaComponent } from './bulma.component';

describe('BulmaComponent', () => {
  let component: BulmaComponent;
  let fixture: ComponentFixture<BulmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
