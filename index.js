const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten (Ralph) {
   kittens.push(Ralph)
   return kittens
}
function destructivelyAppendKitten(Bob) {
  kittens.unshift(Bob)
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
function appendKitten(Broom) {
  [...kittens, Broom]
  return kittens
}
function prependKitten(Arnold) {
  [Arnold, ...kittens]
  return kittens
}
function removeLastKitten() {
kittens.slice(0, leng-1)
return kittens
}
function removeFirstKitten() {
  kittens.slice(1)
  return kittens
}
