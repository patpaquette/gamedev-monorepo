import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@libs/battleboard-editor/src/lib/battleboard-editor.module').then(
        m => m.BattleboardEditorModule
      )
  }
];
