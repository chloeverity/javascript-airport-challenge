var CAPACITY = 100;

function Airport(weather, capacity) {
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this.hangar = []
  this.hangarCapacity = typeof hangarCapacity !== 'undefined' ? hangarCapacity : CAPACITY;
}

Airport.prototype.land = function(plane) {
  if (this._weather.isStormy() === true) {
    throw new Error "Plane unable to land";
} else if (this.hangar.length >= this.hangarCapacity) {
    throw new Error "No landing space available";
  } else {
  this.hangar.push(plane);
  return "Plane Landed"
  }
};

Airport.prototype.takeOff = function(plane) {
  if (this._weather.isStormy() === true) {
    throw new Error "Plane unable to take off";
  } else if (this.hangar.length === 0) {
      throw new Error "No planes available";
    } else {
    this.hangar.pop(plane);
    return "Plane has taken off"
  }
};
