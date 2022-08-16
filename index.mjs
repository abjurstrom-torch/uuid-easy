import { UuidEasy } from "./UuidEasy.mjs";
import * as uuid from "uuid";

const test = new UuidEasy("ffffffff-4c0c-45a2-9864-f57e4d151bdf");
console.log(test.debug, test.value);

const test2 = new UuidEasy("ffffffff-4c0c-45a2-9864-f57e4d15df1b");
console.log(test2.debug, test2.value);

const test3 = new UuidEasy(uuid.NIL);
console.log(test3.debug, test3.value);

const test4 = new UuidEasy("ffffffff-4fff-4fff-9999-ffffffffffff");
console.log(test4.debug, test4.value);
