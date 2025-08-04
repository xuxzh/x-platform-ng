import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesignApplication } from './design-application';

describe('DesignApplication', () => {
  let component: DesignApplication;
  let fixture: ComponentFixture<DesignApplication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignApplication],
    }).compileComponents();

    fixture = TestBed.createComponent(DesignApplication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
