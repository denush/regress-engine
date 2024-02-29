const CONTEXT_TYPE = "2d";

interface Options {
  root: HTMLElement;
}

export default class CanvasProvider {
  private _canvas: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;

  constructor({ root }: Options) {
    if (!root) {
      throw new Error("NO ROOT ELEMENT PROVIDED TO CANVAS_PROVIDER CLASS");
    }

    this._canvas = document.createElement("canvas");
    this._ctx = this._canvas.getContext(
      CONTEXT_TYPE
    ) as CanvasRenderingContext2D;

    window.addEventListener("resize", () => {
      this._adjustSize(root.offsetWidth, root.offsetHeight);
    });

    this._adjustSize(root.offsetWidth, root.offsetHeight);
    root.append(this._canvas);
  }

  private _adjustSize(width: number, height: number) {
    this._canvas.width = width;
    this._canvas.height = height;
  }

  provide() {
    return {
      canvas: this._canvas,
      ctx: this._ctx,
    };
  }
}
