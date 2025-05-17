import { mergedAsd, mergedOpposite } from "./utils";

export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[],
): number[] {
  const merged_asd: number[] = mergedAsd(collection_1, collection_2);
  const merged_collection: number[] = mergedOpposite(merged_asd, collection_3);

  return merged_collection;
}
 