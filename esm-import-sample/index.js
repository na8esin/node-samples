import test from "./test.js";
import at from "lodash/at.js";

test();

console.log(at({ a: { b: "test" } }, ["a.b"])); // ['test']
