import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MazmorreoComponent } from './mazmorreo.component';

describe('MazmorreoComponent', () => {
  let component: MazmorreoComponent;
  let fixture: ComponentFixture<MazmorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MazmorreoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MazmorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
