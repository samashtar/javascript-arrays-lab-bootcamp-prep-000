const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten (name) {
   kittens.push(name)
   return kittens
}
function destructivelyAppendKitten(name) {
  kittens.unshift(name)
  return kittens
}
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
 return kittens.shift()
}
function appendKitten(name) {
  return [...kittens, name]

}
function prependKitten(name) {
  return [name, ...kittens]
}
function removeLastKitten() {
return kittens.slice(0, kittens.length-1)
}
function removeFirstKitten() {
  kittens.slice(1)
  return kittens
}
function destructivelyPrependKitten(name) {
kittens.unshift(name)
return kittens
}