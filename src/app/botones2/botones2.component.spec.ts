import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Botones2Component } from './botones2.component';

describe('Botones2Component', () => {
  let component: Botones2Component;
  let fixture: ComponentFixture<Botones2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Botones2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Botones2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
