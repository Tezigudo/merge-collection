export function mergedAsd(
  collection_1: number[],
  collection_2: number[],
): number[] {
  let result: number[] = [];
  let i = 0,
    j = 0;
  while (i < collection_1.length && j < collection_2.length) {
    const min1 = collection_1[i];
    const min2 = collection_2[j];

    if (min1 <= min2) {
      result.push(min1);
      i++;
    } else {
      result.push(min2);
      j++;
    }
  }

  while (i < collection_1.length) {
    result.push(collection_1[i++]);
  }

  while (j < collection_2.length) {
    result.push(collection_2[j++]);
  }
  return result;
}

export function mergedOpposite(
  asd_collection: number[],
  desc_collection: number[],
): number[] {
  let result: number[] = [];
  let i = 0,
    j = desc_collection.length - 1;
  while (i < asd_collection.length && j >= 0) {
    const min1 = asd_collection[i];
    const min2 = desc_collection[j];

    if (min1 <= min2) {
      result.push(min1);
      i++;
    } else {
      result.push(min2);
      j--;
    }
  }

  while (i < asd_collection.length) {
    result.push(asd_collection[i++]);
  }

  while (j >= 0) {
    result.push(desc_collection[j--]);
  }
  console.log(result, j);
  return result;
}
