import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../../../libs/rendering/feature-canvas-render-target/src/lib/rendering-feature-canvas-render-target.module').then(
        m => m.RenderingFeatureCanvasRenderTargetModule
      )
  }
];
