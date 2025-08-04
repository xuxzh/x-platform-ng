import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainFrame } from './main-frame';

describe('MainFrame', () => {
  let component: MainFrame;
  let fixture: ComponentFixture<MainFrame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainFrame],
    }).compileComponents();

    fixture = TestBed.createComponent(MainFrame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
