function Weather() {

}

Weather.prototype.isStormy = function() {
  var random = Math.random()
  if (random > 0.6) {
    return false
  } else {
    return true
  }
}
