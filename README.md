Alternate and slightly faster implementation of [map2](https://www.npmjs.com/package/map2) and [set2](https://www.npmjs.com/package/set2) allowing you to use more than one key as the key

✅ Performance guarantee. Found a faster implementation? Make an issue on our github!

- ES6 support
- Available in global scope
- `Map2` & `Set2`
- Can be used exactly like existing `Set` and `Map`
- Support for `.swap()` and `.pop()`


```js
import 'twokeys'

const map = new Map()
map.set([1, 2], 3)
map.get([1, 2])
// => undefined
// ES6 map is by reference, not value

const map = new Map2()
map.set(1, 2, 3)
map.get(1, 2)
// => 3
const x = {}, y = []
map.set(x, y, {a: 1})
map.get(x, y)
// => {a: 1}
map.has(x, y)
// true
map.delete(x, y)
map.get(x, y)
// => undefined

const map = new Map2([
	[1, 2, 3],
	[1, 5, 6],
	[2, 10, 12],
])
map.set(3, 4, 7).set(9, 9, 9)
map.size
// => 5

for(const [k1, k2, v] of map){
	console.log(k1, k2, v)
}
// 1 2 3
// 1 5 6
// 2 10 12
// 3 4 7
// 9 9 9

console.log([...map.values()])
// => [3, 6, 12, 7, 9]
console.log([...map.keys()])
// => [[1, 2], [1, 5], [2, 10], [3, 4], [9, 9]]
console.log(map.submap(1))
// => Map(2) { 2 => 3, 5 => 6 }
console.log(map)
// Map2(4) { (1, 2) => 3, (1, 5) => 6, (2, 10) => 12, (3, 4) => 7, (9, 9) => 9 }
map.clear()


const set = new Set2()

// Chaining works on both set and map
set.add(1, 2).add(3, 4)
set.swap(5, 5)
// => false
set
// Set2(3) { (1, 2), (3, 4), (5, 5) }
set.swap(5, 5)
// => true  (entry was present, set unchanged)

for(const [a, b] of set){
	console.log(a, b)
}
// 1 2
// 3 4
// 5 5
```