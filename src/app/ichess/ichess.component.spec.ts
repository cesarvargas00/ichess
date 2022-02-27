import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IchessComponent } from './ichess.component';

describe('IchessComponent', () => {
  let component: IchessComponent;
  let fixture: ComponentFixture<IchessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IchessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IchessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
