import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyColorComponent } from './copy-color.component';

describe('CopyColorComponent', () => {
  let component: CopyColorComponent;
  let fixture: ComponentFixture<CopyColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopyColorComponent]
    });
    fixture = TestBed.createComponent(CopyColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
