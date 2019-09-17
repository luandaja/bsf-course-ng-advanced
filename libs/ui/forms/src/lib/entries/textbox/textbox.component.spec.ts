import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TexboxComponent } from './textbox.component';

describe('TexboxComponent', () => {
  let component: TexboxComponent;
  let fixture: ComponentFixture<TexboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TexboxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
