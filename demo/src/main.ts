import { Loop } from "../../src";

export default function main() {
  let n = 0;
  const increment = () => {
    console.log(n++);
  };

  const loop = new Loop(increment);
  loop.start();
}
