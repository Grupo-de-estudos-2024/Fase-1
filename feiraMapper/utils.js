const fs = require('fs')
const path = require('path')

const saveFile = (fileName, data) => {
  fs.writeFileSync(path.join(__dirname, fileName), data)
}

const readFile = (fileName) => {
  return fs.readFileSync(path.join(__dirname, fileName), { encoding: 'utf-8' })
}

module.exports = {
  saveFile,
  readFile,
}
