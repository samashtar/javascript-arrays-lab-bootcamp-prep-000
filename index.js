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
  return kittens
}
function prependKitten(Arnold) {
  return kittens
}
