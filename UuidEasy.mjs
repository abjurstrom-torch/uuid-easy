import * as uuid from "uuid";
import emojis from "emoji-chars";

/**
 * Class UuidEasy
 * An object oriented guid class that allows for easy debugging using human readable images for
 * low cognitive load comparisons.
 *
 * Mirrors some behavior of the C# behavior of a Guid in that the value of a UuidEasy is always
 * something.  When no uuid has been set the special NIL value (all zeros) is used.
 */
export class UuidEasy {
  #rawValue = uuid.NIL;

  /**
   * Creates a new instance of an easy uuid with an optional initial value.
   *
   * @param {string | UuidEasy | undefined} initialValue
   */
  constructor(initialValue) {
    this.value = initialValue;
  }

  /**
   * @returns boolean by if the value of this class is considered to be "empty" or all zeros.
   */
  isEmpty() {
    return this.#rawValue === uuid.NIL;
  }

  /**
   * Allows a simple string or other class to be compared with this object.
   *
   * @param {string | UuidEasy} otherValue
   * @returns boolean by equality with provided value
   */
  isEqual(otherValue) {
    if (otherValue instanceof UuidEasy) {
      return this.#rawValue === otherValue.value;
    }

    return this.#rawValue === otherValue;
  }

  get value() {
    return this.#rawValue;
  }

  /**
   * Sets the uuid value of this object.  If the input is falsy, nothing happens.
   * Must be a valid uuid to set without issue.
   *
   * @param input {string | UuidEasy | undefined} A value to set as the uuid value.
   */
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

  /**
   * Returns a debug value of a human parsable value for this value.
   * Note:  Odds of collision are roughly 1 in emojis.length, currently around 1500.
   */
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
