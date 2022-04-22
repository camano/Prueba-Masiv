import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregartareaComponent } from './agregartarea.component';

describe('AgregartareaComponent', () => {
  let component: AgregartareaComponent;
  let fixture: ComponentFixture<AgregartareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregartareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregartareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
