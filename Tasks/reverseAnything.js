// Return reverse anything, we are getting from arguments
function reverseAll(data) {
  if (Array.isArray(data)) return data.toReversed()
  if (typeof data === 'string') return data.split('').toReversed().join('')
  if (data.constructor.name === 'Set') return new Set(Array.from(data).toReversed())
  if (data.constructor.name === 'Object' || data.constructor.name === 'Map') return { ...data }
  if (typeof data === 'number') return Number(data.toString().split('').toReversed().join(''))
}
const abc = 'abc'
const num = 789
console.log(reverseAll(abc))
console.log(reverseAll([1, 2, 3]))
console.log(reverseAll(num))
console.log(reverseAll(new Set([1, 2, 3, 'set'])))
console.log(reverseAll({ a: 1 }))
console.log('----------------------')
console.log('prev', abc)
console.log('prev', num)
