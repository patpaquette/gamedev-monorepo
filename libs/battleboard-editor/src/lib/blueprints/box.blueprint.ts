import { Mesh } from '@babylonjs/core';
import { Color4, Vector4 } from '@babylonjs/core/Maths/math';
import { BluePrint, BlueprintName } from './blueprints.interface';

export class Box extends Mesh implements BluePrint {
  public blueprintName: BlueprintName;
}

export interface BoxOptions {
  size?: number;
  width?: number;
  height?: number;
  depth?: number;
  faceUV?: Vector4[];
  faceColors?: Color4[];
  sideOrientation?: number;
  frontUVs?: Vector4;
  backUVs?: Vector4;
  updatable?: boolean;
}
