import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageInfoPreview } from './page-info-preview';

describe('PageInfoPreview', () => {
  let component: PageInfoPreview;
  let fixture: ComponentFixture<PageInfoPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageInfoPreview],
    }).compileComponents();

    fixture = TestBed.createComponent(PageInfoPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
