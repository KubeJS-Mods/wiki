export type Supplier<T> = () => T
export type Consumer<T> = (value: T) => void
export type Predicate<T> = (value: T) => boolean
export type Function<T, R> = (value: T) => R
export type BiConsumer<T, U> = (value1: T, value2: U) => void
export type BiPredicate<T, U> = (value1: T, value2: U) => boolean
export type BiFunction<T, U, R> = (value1: T, value2: U) => R
