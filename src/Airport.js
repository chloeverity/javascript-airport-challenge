var CAPACITY = 100;

function Airport(weather, hangarCapacity) {
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this.hangar = []
  this.hangarCapacity = typeof hangarCapacity !== 'undefined' ? hangarCapacity : CAPACITY;
}

Airport.prototype.land = function(plane) {
  if (this._weather.isStormy() === true) {
    throw "Plane unable to land";
} else if (this.hangar.length >= this.hangarCapacity) {
    throw "No landing space available";
} else {
  this.hangar.push(plane);
  return "Plane has landed"
  }
};

Airport.prototype.takeOff = function(plane) {
  if (this._weather.isStormy() === true) {
    throw "Plane unable to take off";
  } else if (this.hangar.length === 0) {
      throw "No planes available";
    } else {
    this.hangar.pop(plane);
    return "Plane has taken off"
  }
};
