type LoopCallback = () => void;

export default class Loop {
  private _callback: LoopCallback | null = null;
  private _wrapper = () => {
    requestAnimationFrame(this._wrapper);

    this._callback!();
  };

  constructor(callback: LoopCallback) {
    this._callback = callback;
  }

  start() {
    if (!this._callback) {
      throw new Error("NO_LOOP_CALLBACK_PROVIDED");
    }

    this._wrapper();
  }
}
