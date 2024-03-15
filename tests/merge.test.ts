import { describe, expect, it } from "bun:test";
import { merge } from "../src/merge";

describe("merge function", () => {
  it("merges three sorted collections", () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const collection3 = [6, 4, 2];
    const merged = merge(collection1, collection2, collection3);
    expect(merged).toEqual([1, 2, 2, 3, 4, 4, 5, 6, 6]);
  });

  it("should merge three collections correctly with collection3 overlength", () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    const collection_3 = [9, 7, 5, 3, 1];
    const expected = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 9];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual(expected);
  });
});
