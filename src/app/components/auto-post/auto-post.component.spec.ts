import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPostComponent } from './auto-post.component';

describe('AutoPostComponent', () => {
  let component: AutoPostComponent;
  let fixture: ComponentFixture<AutoPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
