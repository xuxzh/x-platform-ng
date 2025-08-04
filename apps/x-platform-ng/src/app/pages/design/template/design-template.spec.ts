import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesignTemplate } from './design-template';

describe('DesignTemplate', () => {
  let component: DesignTemplate;
  let fixture: ComponentFixture<DesignTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(DesignTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
