import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppPagePreview } from './app-page-preview';

describe('AppPagePreview', () => {
  let component: AppPagePreview;
  let fixture: ComponentFixture<AppPagePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPagePreview],
    }).compileComponents();

    fixture = TestBed.createComponent(AppPagePreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
