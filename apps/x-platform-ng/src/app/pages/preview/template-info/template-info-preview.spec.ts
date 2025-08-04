import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateInfoPreview } from './template-info-preview';

describe('TemplateInfoPreview', () => {
  let component: TemplateInfoPreview;
  let fixture: ComponentFixture<TemplateInfoPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateInfoPreview],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateInfoPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
