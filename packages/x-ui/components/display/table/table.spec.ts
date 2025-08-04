import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XzTable } from './table';

describe('Table', () => {
  let component: XzTable;
  let fixture: ComponentFixture<XzTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XzTable],
    }).compileComponents();

    fixture = TestBed.createComponent(XzTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
