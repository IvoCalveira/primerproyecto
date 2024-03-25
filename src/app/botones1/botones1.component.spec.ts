import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Botones1Component } from './botones1.component';

describe('Botones1Component', () => {
  let component: Botones1Component;
  let fixture: ComponentFixture<Botones1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Botones1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Botones1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
