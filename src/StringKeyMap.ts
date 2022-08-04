/**
 * Create `MyMap` implements interface `StringKeyMap<V>` and fullfill regulations below:
 *
 * Required:
 * - Don't use `Map` `Set` or `Object`, which have any interfaces to get / set key:value pairs
 * - Index access of array is only allowed method.
 * - Can put string key and value pair using `set`
 * - Can get value using `get` with string key
 * - If there's no value with string key, throws `NoSuchEntryError`
 *
 * Optional:
 * - add `delete(key: string): void` and implement
 * - implement possible fastest algorithm
 */
export interface StringKeyMap<V> {
  /**
   * @throws NoSuchEntryError
   */
  get(key: string): V

  set(key: string, value: V): void
}
