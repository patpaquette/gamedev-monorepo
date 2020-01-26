import { Routes } from '@angular/router';
import { CanvasComponent } from '@libs/battleboard-editor/src/lib/+canvas/canvas.component';

export const battleboardEditorRoutes: Routes = [
  {
    path: '',
    component: CanvasComponent
  }
];
