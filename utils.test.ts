import { describe, expect, it } from "bun:test";
import { mergedAsd, mergedOpposite } from "./utils";

describe("mergedAsd", () => {
  it("should merge two sorted collections with equal length", () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    const expected = [1, 2, 3, 4, 5, 6];
    const result = mergedAsd(collection_1, collection_2);
    expect(result).toEqual(expected);
  });

  it("should merge two sorted collections with different length", () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6, 7];
    const expected = [1, 2, 3, 4, 5, 6, 7];
    const result = mergedAsd(collection_1, collection_2);
    expect(result).toEqual(expected);
  });
});

describe("mergedOpposite", () => {
  it("should merge two sorted collections", () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [6, 4, 2];
    const expected = [1, 2, 3, 4, 5, 6];
    const result = mergedOpposite(collection_1, collection_2);
    expect(result).toEqual(expected);
  });

  it("should merge two sorted collections with different length", () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [6, 4, 2, 0];
    const expected = [0, 1, 2, 3, 4, 5, 6];
    const result = mergedOpposite(collection_1, collection_2);
    expect(result).toEqual(expected);
  });
});
