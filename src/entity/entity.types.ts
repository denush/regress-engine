interface EntityShapeRectangle {
  type: "rectangle";
  width: number;
  height: number;
}

interface EntityShapeSquare {
  type: "square";
  width: number;
}

interface EntityShapeCircle {
  type: "circle";
  radius: number;
}

export type EntityShape =
  | EntityShapeRectangle
  | EntityShapeSquare
  | EntityShapeCircle;
