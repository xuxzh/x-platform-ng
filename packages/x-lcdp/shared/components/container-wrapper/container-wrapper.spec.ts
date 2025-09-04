import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerWrapper } from './container-wrapper';

describe('ContainerWrapper', () => {
  let component: ContainerWrapper;
  let fixture: ComponentFixture<ContainerWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerWrapper],
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
