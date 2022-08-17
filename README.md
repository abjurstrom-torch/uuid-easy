# UuidEasy

Attempts to make UUID's slightly less painful to read as a human with the help of pictures.

## Usage

The debug property on UuidEasy makes it easy to spot similar or different uuids. For example, are the following test and test2 values
the same? Different?

```js
import { UuidEasy } from "./UuidEasy.mjs";
const test = new UuidEasy("ffffffff-4c0c-45a2-9864-f57e4d151bdf");
const test2 = new UuidEasy("ffffffff-4c0c-45a2-9864-f57e4d15df1b");
console.log(`${test.debug} == ${test2.debug}?`);
```

With the debug command it becomes much more obvious. Red necklace thing does not equal bus.

> 📿 == 🚌?
