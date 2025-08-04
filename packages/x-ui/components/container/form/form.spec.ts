import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XzForm } from './form';

describe('Form', () => {
  let component: XzForm;
  let fixture: ComponentFixture<XzForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XzForm],
    }).compileComponents();

    fixture = TestBed.createComponent(XzForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
