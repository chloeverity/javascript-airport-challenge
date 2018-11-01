function Plane() {
  this.status = 'flying'
};

Plane.prototype.land = function(airport) {
  if (this.status === 'landed')
    throw 'Plane already landed';
   else {
    this.status = 'landed';
  airport.land(this)
  }
}

Plane.prototype.takeOff = function(airport) {
  if (this.status === 'flying')
    throw 'Plane already taken off';
  else {
    this.status = 'flying';
  airport.takeOff(this)
  }
}
