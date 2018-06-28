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
