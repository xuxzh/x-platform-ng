import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestOnly } from './test-only';

describe('TestOnly', () => {
  let component: TestOnly;
  let fixture: ComponentFixture<TestOnly>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestOnly],
    }).compileComponents();

    fixture = TestBed.createComponent(TestOnly);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
