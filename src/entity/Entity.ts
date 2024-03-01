import Point from "../utils/Point";
import type { EntityShape } from "./entity.types";

interface Options {
  position: Point;
  shape: EntityShape;
}

export default class Entity {
  private _position: Point;
  private _shape: EntityShape;

  constructor({ position, shape }: Options) {
    this._position = position;
    this._shape = shape;
  }

  get position(): Readonly<Point> {
    return this._position;
  }

  get shape(): Readonly<EntityShape> {
    return this._shape;
  }
}
