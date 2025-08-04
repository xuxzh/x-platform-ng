import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XzButton } from './button';

describe('Button', () => {
  let component: XzButton;
  let fixture: ComponentFixture<XzButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XzButton],
    }).compileComponents();

    fixture = TestBed.createComponent(XzButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
