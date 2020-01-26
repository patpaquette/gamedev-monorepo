import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CanvasModule } from '@libs/battleboard-editor/src/lib/+canvas/canvas.module';
import { battleboardEditorRoutes } from '@libs/battleboard-editor/src/lib/battleboard-editor.routes';

@NgModule({
  imports: [
    CommonModule,
    CanvasModule,
    RouterModule.forChild(battleboardEditorRoutes)
  ]
})
export class BattleboardEditorModule {}
