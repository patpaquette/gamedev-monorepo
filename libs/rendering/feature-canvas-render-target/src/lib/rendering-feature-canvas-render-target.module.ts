import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasRenderTargetComponent } from './canvas-render-target/canvas-render-target.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [CanvasRenderTargetComponent]
})
export class RenderingFeatureCanvasRenderTargetModule {}
