import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesignPageUi } from './design-page-ui';

describe('DesignPageUi', () => {
  let component: DesignPageUi;
  let fixture: ComponentFixture<DesignPageUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignPageUi],
    }).compileComponents();

    fixture = TestBed.createComponent(DesignPageUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
