import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineYangililarComponent } from './online-yangililar.component';

describe('OnlineYangililarComponent', () => {
  let component: OnlineYangililarComponent;
  let fixture: ComponentFixture<OnlineYangililarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineYangililarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineYangililarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
