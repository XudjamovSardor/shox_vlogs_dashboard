import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YangilikComponent } from './yangilik.component';

describe('YangilikComponent', () => {
  let component: YangilikComponent;
  let fixture: ComponentFixture<YangilikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YangilikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YangilikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
