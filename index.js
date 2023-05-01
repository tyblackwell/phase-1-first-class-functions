function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  return function named() {
    console.log("Hello world")
  }
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("Hello world")
  }
}