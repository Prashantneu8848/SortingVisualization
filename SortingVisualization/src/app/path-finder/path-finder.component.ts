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
  canvasElem: HTMLCanvasElement;
  sqaures: Square[];
  constructor() { }

  private ctx: CanvasRenderingContext2D;

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.initializeSquares();
    this.canvasElem = document.querySelector("canvas");
    this.canvasElem.addEventListener("mousedown", (e: MouseEvent) => { this.getMousePosition(this.canvasElem, e);}); 
  }

  getMousePosition(canvasElem: HTMLCanvasElement, e: MouseEvent) {
    this.rect = canvasElem.getBoundingClientRect();
    let x = e.clientX - this.rect.left; 
    let y = e.clientY - this.rect.top; 
    let selectedSquare = -1;
    for (var i = 0; i < this.sqaures.length; i++) {
      let sq: Square = this.sqaures[i];
      var dx = x - sq.x;
      var dy = y - sq.y;
      var zz = sq.z * sq.z;
      if (dx * dy < zz) {
          selectedSquare = i;
          console.log(selectedSquare);
      }
    }
    if (selectedSquare >= 0) {
      var sq = this.sqaures[selectedSquare];
      sq.x = x;
      sq.y = y;
  }

    this.drawRects();
  }

  initializeSquares(): void {
    this.ctx.fillStyle = 'red';
    let x1: number = 10;
    let x2: number = 700;
    let y1: number = 100;
    let y2: number = 300;
    let r: number = 15;

    const square1 = new Square(this.ctx, x1, y1, r);
    const square2 = new Square(this.ctx, x2, y2, r);
    this.sqaures = [square1,square2];
    
    square1.draw();
    square2.draw();
  }

  drawRects(): void {
    this.ctx.clearRect(0, 0, 800, 400);
    this.ctx.fillStyle = 'red';
    for (var i = 0; i < this.sqaures.length; i++) {
      let sq: Square = this.sqaures[i];
      sq.draw();
    }
  }

  animate(): void {
    console.log("animate button has been clicked")
  }
}

export class Square {
  // z is height and width for the square
  x: number;
  y: number;
  z: number;
  constructor(private ctx: CanvasRenderingContext2D, x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  draw() {
    this.ctx.fillRect(this.x, this.y, this.z, this.z);
  }
}