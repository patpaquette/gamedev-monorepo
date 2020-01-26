import { TestBed } from '@angular/core/testing';
import { BoxFactory } from '@libs/battleboard-editor/src/lib/factories/box.factory';

describe('CubeFactory.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoxFactory = TestBed.get(BoxFactory);
    expect(service).toBeTruthy();
  });
});
