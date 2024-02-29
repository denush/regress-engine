type LoopCallback = () => void;

export default class Loop {
  private _callback: LoopCallback;
  private _wrapper = () => {
    requestAnimationFrame(this._wrapper);

    this._callback!();
  };

  constructor(callback: LoopCallback) {
    this._callback = callback;
  }

  start() {
    this._wrapper();
  }
}
