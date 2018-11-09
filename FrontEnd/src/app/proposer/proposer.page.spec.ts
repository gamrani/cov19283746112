import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposerPage } from './proposer.page';

describe('ProposerPage', () => {
  let component: ProposerPage;
  let fixture: ComponentFixture<ProposerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
