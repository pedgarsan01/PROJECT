import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanrepasComponent } from './planrepas.component';


describe('PlanrepasComponent', () => {
  let component: PlanrepasComponent;
  let fixture: ComponentFixture<PlanrepasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanrepasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanrepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
