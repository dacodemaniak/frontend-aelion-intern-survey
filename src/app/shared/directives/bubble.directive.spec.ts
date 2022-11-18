import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BubbleDirective } from './bubble.directive';

@Component({
  template: `<span appBubble>JL</span>`
})
class SimpleBubble{}

describe('BubbleDirective', () => {
  let component: SimpleBubble;
  let fixture: ComponentFixture<SimpleBubble>;
  let htmlElement: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BubbleDirective
      ]
    });
    fixture = TestBed.createComponent(SimpleBubble);
    component = fixture.componentInstance;
    htmlElement = fixture.debugElement.query(By.css('span'));
  })
});
