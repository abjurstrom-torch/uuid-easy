import test from "ava";
import * as uuid from "uuid";
import { UuidEasy } from "./UuidEasy.mjs";

test("UuidEasy, when empty, is equal to empty.", (ava) => {
  const testTarget = new UuidEasy();
  ava.assert(testTarget.isEqual(uuid.NIL));
  ava.assert(testTarget.isEqual(new UuidEasy()));

  ava.is(testTarget.value, uuid.NIL);
  ava.is(testTarget.value, new UuidEasy().value);
});

test("UuidEasy, when populated, is equal to value.", (ava) => {
  const testValue = uuid.v4();
  const testTarget = new UuidEasy(testValue);
  const testValueObject = new UuidEasy();
  testValueObject.value = testValue;

  ava.assert(testTarget.isEqual(testValue));
  ava.assert(testTarget.isEqual(testValueObject));

  ava.is(testTarget.value, testValue);
  ava.is(testTarget.value, testValueObject.value);
});

test("UuidEasy, when populated, debugs to consistent and semi-distinct output.", (ava) => {
  const testTarget = new UuidEasy("f0ea5824-5c07-4df6-bb58-bf04aece9d8a");
  ava.is(testTarget.debug, "🔉");

  const testTarget2 = new UuidEasy("f1ea5824-5c07-4df6-bb58-bf04aece9d8a");
  ava.not(testTarget2.debug, "🔉");
});
