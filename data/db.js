var fs = require('fs')
function getAll(resource, callback) {
  fs.readFile(`${__dirname}/${resource}.json`, 'utf8', function (err, file) {
    if (err) callback(err)
    callback(null, JSON.parse(file))
   })
}

function getResourceById (resource, id, callback) {
// Could just use getAll cuntion instead of re-writing fs.readfile.
  fs.readFile(`${__dirname}/${resource}.json`, 'utf8', function (err, file) {
    if (err) {
      callback(err)
    } else {
      var colorsObj = JSON.parse(file)
      var color = find(colorsObj.colors, { id: id})
      if (color) {
        callback(null, color)
      } else {
        callback(new Error(`Resource color of id: ${id} does not exist`))
      }
    }
  })
}




module.exports = {
  getAll: getAll,
  getResourceById: getResourceById
}
