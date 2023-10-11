import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDvdComponent } from './home-dvd.component';

describe('HomeDvdComponent', () => {
  let component: HomeDvdComponent;
  let fixture: ComponentFixture<HomeDvdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDvdComponent]
    });
    fixture = TestBed.createComponent(HomeDvdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
