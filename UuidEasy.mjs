import * as uuid from "uuid";
import emojis from "emoji-chars";

export class UuidEasy {
  #rawValue = uuid.NIL;

  constructor(initialValue) {
    this.value = initialValue;
  }

  isEmpty() {
    return this.#rawValue === uuid.NIL;
  }

  isEqual(otherValue) {
    if (otherValue instanceof UuidEasy) {
      return this.#rawValue === otherValue.value;
    }

    return this.#rawValue === otherValue;
  }

  get value() {
    return this.#rawValue;
  }

  set value(input) {
    if (!input) {
      return;
    }

    if (input instanceof UuidEasy) {
      this.#rawValue = input.value;
    } else {
      if (!uuid.validate(input)) {
        throw new Error(
          "Not a valid initial value, does not appear to be a uuid."
        );
      }

      this.#rawValue = input;
    }
  }

  get debug() {
    const numberValue = uuid
      .parse(this.#rawValue)
      .reduce(
        (previousValue, currentValue, index) =>
          previousValue + currentValue * (index + 1),
        0
      );

    return emojis[Math.abs(numberValue) % emojis.length];
  }
}
