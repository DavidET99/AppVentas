import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCliPage } from './formcli.page';

describe('FormcliPage', () => {
  let component: FormCliPage;
  let fixture: ComponentFixture<FormCliPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
