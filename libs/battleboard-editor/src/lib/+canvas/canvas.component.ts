import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Engine, Scene } from '@babylonjs/core';
import { CanvasService } from '@libs/battleboard-editor/src/lib/+canvas/canvas.service';

@Component({
  selector: 'bobae-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  @ViewChild('canvasRef', {read: ElementRef, static: true}) canvasRef: ElementRef;

  engine: Engine;

  constructor(private canvasService: CanvasService) { }

  ngOnInit() {
    this.engine = new Engine(this.canvasRef.nativeElement);
    this.canvasService.renderStandardScene(this.engine);
  }

}
