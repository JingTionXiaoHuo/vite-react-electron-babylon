declare namespace CSS {
  let paintWorklet: paintWorklet;
}

interface paintWorklet {
  addModule(moduleURL: string | URL, options?: WorkletOptions): Promise<void>;
}


interface PaintRenderingContext2D extends CanvasCompositing, CanvasDrawImage, CanvasDrawPath, CanvasFillStrokeStyles, CanvasImageSmoothing, CanvasPath, CanvasPathDrawingStyles, CanvasRect, CanvasShadowStyles, CanvasState, CanvasTransform {
  // PaintRenderingContext2D是CanvasRenderingContext2D减去了CanvasFilters, CanvasText, CanvasTextDrawingStyles, CanvasImageData, CanvasUserInterface
  // 参考https://www.w3.org/TR/css-paint-api-1/#paintrenderingcontext2d
}

interface PaintSize {
  width: number;
  height: number;
}

interface StylePropertyMapReadOnly {
  //   iterable<USVString, sequence<CSSStyleValue>>;
  get(USVString: property): any;
  // sequence < CSSStyleValue > getAll(USVString property);
  //   boolean has(USVString property);
  //   readonly attribute unsigned long size;
};