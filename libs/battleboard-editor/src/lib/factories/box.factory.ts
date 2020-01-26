import { Injectable } from '@angular/core';
import { MeshBuilder, Scene } from '@babylonjs/core';
import { BlueprintName } from '@libs/battleboard-editor/src/lib/blueprints/blueprints.interface';
import { Box, BoxOptions } from '@libs/battleboard-editor/src/lib/blueprints/box.blueprint';

@Injectable({
  providedIn: 'root'
})
export class BoxFactory {

  constructor() { }

  createBox(name, options: BoxOptions, scene?: Scene): Box {
    const box: Box = MeshBuilder.CreateBox(name, options, scene) as Box;
    box.blueprintName = BlueprintName.BOX;
    return box;
  }

  createStandardBox(name: string, scene?: Scene): Box {
    return this.createBox(name, {size: 1}, scene);
  }
}
