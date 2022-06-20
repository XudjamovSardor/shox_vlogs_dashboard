import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBiznesComponent } from './show-biznes.component';

describe('ShowBiznesComponent', () => {
  let component: ShowBiznesComponent;
  let fixture: ComponentFixture<ShowBiznesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBiznesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBiznesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
