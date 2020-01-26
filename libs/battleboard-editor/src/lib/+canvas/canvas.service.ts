import { ElementRef, Injectable } from '@angular/core';
import { Engine, HemisphericLight, Light, Mesh, MeshBuilder, Scene, UniversalCamera, Vector3 } from '@babylonjs/core';
import { GridMaterial } from '@babylonjs/materials/grid';
import { getVector3, metres } from '@libs/battleboard-editor/src/lib/helpers/measurements.helper';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  constructor() { }

  public renderStandardScene(engine: Engine, renderLoop: (scene: Scene) => void = (s) => s.render()): void {
    const scene: Scene = new Scene(engine);
    const camera: UniversalCamera = new UniversalCamera('camera1', getVector3(0, 5, 0), scene);
    const light: Light = new HemisphericLight('light1', getVector3(0, 1, 0), scene);
    const material = new GridMaterial('grid', scene);
    const ground: Mesh = MeshBuilder.CreateGround('ground1', {
      width: metres(6),
      height: metres(6),
      subdivisions: metres(2)
    }, scene);

    camera.setTarget(Vector3.Zero());
    camera.attachControl(engine.getRenderingCanvas());
    ground.material = material;
    light.intensity = 0.7;

    engine.runRenderLoop(() => {
      renderLoop(scene);
    });
  }
}
