/**
 * 여러 배열을 결합하여 그룹화된 요소들의 단일 배열로 만듭니다.
 * 각 그룹은 입력 배열에서 동일한 인덱스에 있는 요소들을 포함합니다.
 * 결과 배열의 길이는 가장 짧은 입력 배열의 길이에 의해 결정됩니다.
 *
 * @typeParam T - 각 배열이 임의의 타입 요소를 포함할 수 있는 배열 튜플입니다.
 * 
 * @param arrays - 함께 결합할 배열들입니다.
 * 
 * @returns 그룹화된 요소들의 배열로, 각 그룹은 동일한 인덱스에 있는
 * 입력 배열의 요소들을 포함하는 배열입니다.
 * 
 * @example
 * ```ts
 * const result = zip([1, 2, 3], ['a', 'b', 'c'], [true, false, true]);
 * // result: [[1, 'a', true], [2, 'b', false], [3, 'c', true]]
 * ```
 */
export default function zip<T extends unknown[][]>(
    ...arrays: T
): { [K in keyof T]: T[K] extends (infer U)[] ? U : never }[] {
    const length = Math.min(...arrays.map((arr) => arr.length));
    return Array.from(
        { length },
        (_, i) =>
            arrays.map((arr) => arr[i]) as { [K in keyof T]: T[K] extends (infer U)[] ? U : never },
    );
}
