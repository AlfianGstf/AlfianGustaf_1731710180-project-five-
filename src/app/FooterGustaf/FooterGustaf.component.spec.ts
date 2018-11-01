/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FooterGustafComponent } from './FooterGustaf.component';

describe('FooterGustafComponent', () => {
  let component: FooterGustafComponent;
  let fixture: ComponentFixture<FooterGustafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterGustafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterGustafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
