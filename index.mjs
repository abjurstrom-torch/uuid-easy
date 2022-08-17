import { UuidEasy } from "./UuidEasy.mjs";

const test = new UuidEasy("ffffffff-4c0c-45a2-9864-f57e4d151bdf");
const test2 = new UuidEasy("ffffffff-4c0c-45a2-9864-f57e4d15df1b");
console.log(`${test.debug} == ${test2.debug}?`);
