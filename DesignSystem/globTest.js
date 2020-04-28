var glob = require("glob")

const globs = ["./src/components/**/*.ts{,x}", "./src/elements/**/*.ts{,x}"]
const res = globs.reduce(((previousValue, currentValue) => {
  return [...previousValue, ...glob.sync(currentValue)]
}), []).filter(p => p.indexOf(".stories.") === -1)
console.log("GOZDECKI res", res)

// const res = glob.sync("src/components/*.ts{,x}")
// console.log("GOZDECKI res", res)
