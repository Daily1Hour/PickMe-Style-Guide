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
