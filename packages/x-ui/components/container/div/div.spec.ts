import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XzDiv } from './div';

describe('Div', () => {
  let component: XzDiv;
  let fixture: ComponentFixture<XzDiv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XzDiv],
    }).compileComponents();

    fixture = TestBed.createComponent(XzDiv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
