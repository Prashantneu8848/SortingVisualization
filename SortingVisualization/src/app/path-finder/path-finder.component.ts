import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-path-finder',
  templateUrl: './path-finder.component.html',
  styleUrls: ['./path-finder.component.css']
})
export class PathFinderComponent implements OnInit {
  @ViewChild('canvas', { static: true }) 
  canvas: ElementRef<HTMLCanvasElement>;
  rect: DOMRect;
  constructor() { }

  private ctx: CanvasRenderingContext2D;

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.drawRects();
    let canvasElem = document.querySelector("canvas");
    canvasElem.addEventListener("mousedown", (e) => { this.getMousePosition(canvasElem, e);}); 
  }

  getMousePosition(canvasElem: HTMLCanvasElement, e: MouseEvent) {
    this.rect = canvasElem.getBoundingClientRect();
    let x = e.clientX - this.rect.left; 
    let y = e.clientY - this.rect.top; 
    console.log("Coordinate x: " + x, "Coordinate y: " + y); 
  }

  drawRects(): void {
    this.ctx.fillStyle = 'red';
    
    const square1 = new Square(this.ctx);
    const square2 = new Square(this.ctx);
    let x1: number = 10;
    let x2: number = 700;
    let y1: number = 100;
    let y2: number = 300;
    square1.draw(x1, y1, 15);
    square2.draw(x2, y2, 15);
  }

  animate(): void {
    console.log("animate button has been clicked")
  }
}

export class Square {
  constructor(private ctx: CanvasRenderingContext2D) {}

  draw(x: number, y: number, z: number) {
    this.ctx.fillRect(x, y, z, z);
  }
}