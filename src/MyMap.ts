import type { StringKeyMap } from "./StringKeyMap"

/**
 * TODO: Implement `get` and `set`
 */
export class MyMap<V> implements StringKeyMap<V> {
  get(key: string): V {
    throw new Error("TODO: implement")
  }

  set(key: string, value: V) {
    throw new Error("TODO: implement")
  }
}
