import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasRenderTargetComponent } from './canvas-render-target.component';

describe('RendererComponent', () => {
  let component: CanvasRenderTargetComponent;
  let fixture: ComponentFixture<CanvasRenderTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasRenderTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasRenderTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
