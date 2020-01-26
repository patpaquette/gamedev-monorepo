import { async, TestBed } from '@angular/core/testing';
import { BattleboardEditorModule } from './battleboard-editor.module';

describe('BattleboardEditorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BattleboardEditorModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BattleboardEditorModule).toBeDefined();
  });
});
