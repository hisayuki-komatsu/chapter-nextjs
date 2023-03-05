type SnakeToCamelCase<T extends string> = T extends `${infer R}_${infer U}`
  ? `${R}${Capitalize<SnakeToCamelCase<U>>}`
  : T

type SnakeToCamelArray<T extends unknown[]> = T extends (infer R)[]
  ? R extends object
    ? ToCamelObj<R>[]
    : R[]
  : never

export type ToCamelObj<T extends object> = {
  [K in keyof T as `${SnakeToCamelCase<string & K>}`]: T[K] extends object
    ? T[K] extends unknown[]
      ? SnakeToCamelArray<T[K]>
      : ToCamelObj<T[K]>
    : T[K]
}
