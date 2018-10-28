import Vue from 'vue'
// import hex from 'hexer'

Vue.use(require('hexer'))

// let hexer = hex.Transform()

// console.log(hex())

/*
hexer.pipe()

process.stdin.on('data', function onData (chunk) {
  var i = findBoundary(chunk)
  while (i > 0) {
    hexer.write(chunk.slice(0, i))
    hexer.reset()
    chunk = chunk.slice(i)
    i = findBoundary(chunk)
  }
  if (chunk.length) {
    hexer.write(chunk)
  }
})
*/
