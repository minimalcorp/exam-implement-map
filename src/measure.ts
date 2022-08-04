import { MyMap } from "./MyMap"

/*
 * Use `yarn measure` to measure performance of MyMap.
 *
 * Put 10,000 random key:value pairs to Map (from JavaScript) and MyMap to prepare for measurement。
 * Using performance measurement API of Node.js to measure time getting all values from MyMap.
 * Smaller number is better.
 */
const getRandomAlphabet = () => {
  return String.fromCharCode(97 + Math.floor(Math.random() * (122 - 97)))
}

const getRandomNumber = () => {
  return `${Math.floor(Math.random() * 10)}`
}

const getRandomText = (n: number) => {
  return [...new Array(n).keys()]
    .map(() => (Math.floor(Math.random() * 2) === 0 ? getRandomNumber() : getRandomAlphabet()))
    .join("")
}

const measure = (iterationCount: number, kvLength: number) => {
  const answer = new Map<string, string>()
  const mymap = new MyMap<string>()
  for (let i = 0; i < iterationCount; i++) {
    const key = getRandomText(kvLength)
    const value = getRandomText(kvLength)
    answer.set(key, value)
    mymap.set(key, value)
  }
  const iterable = answer.entries()

  const start = performance.now()
  for (let i = 0; i < iterationCount; i++) {
    const [key, value] = iterable.next().value
    const actually = mymap.get(key)
    if (value !== actually) {
      throw new Error(`expect (${value}) and result (${actually}) didn't match.`)
    }
  }
  const end = performance.now()
  console.log(`Time: ${end - start}`)
}

measure(10000, 10)
