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
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
function appendKitten(name) {
  return [...kittens, name]

}
function prependKitten(name) {
  [name, ...kittens]
  return kittens
}
function removeLastKitten() {
kittens.slice(0, kittens.length-1)
return kittens
}
function removeFirstKitten() {
  kittens.slice(1)
  return kittens
}
