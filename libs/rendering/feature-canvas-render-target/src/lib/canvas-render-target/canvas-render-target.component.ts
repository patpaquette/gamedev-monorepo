import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  Engine,
  FreeCamera,
  HemisphericLight,
  Mesh,
  Scene,
  Vector3
} from '@babylonjs/core';
import { GridMaterial } from '@babylonjs/materials/grid';

@Component({
  selector: 'nq-canvas-render-target',
  templateUrl: './canvas-render-target.component.html',
  styleUrls: ['./canvas-render-target.component.scss']
})
export class CanvasRenderTargetComponent implements OnInit {
  @ViewChild('canvas', { read: ElementRef, static: true }) canvas: ElementRef;

  constructor() {}

  ngOnInit() {
    const engine = new Engine(this.canvas.nativeElement);
    const scene = new Scene(engine);
    const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(this.canvas.nativeElement, true);
    const light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    const material = new GridMaterial('grid', scene);
    const sphere = Mesh.CreateSphere('sphere1', 16, 2, scene);
    sphere.position.y = 2;
    sphere.material = material;
    const ground = Mesh.CreateGround('ground1', 6, 6, 2, scene);
    ground.material = material;

    engine.runRenderLoop(() => {
      scene.render();
    });
  }
}
