function Airport() {
this.hangar = []
this.hangarCapacity = 100
}

Airport.prototype.land = function(plane, weather = new Weather()) {
  if (weather.isStormy() === true) {
    throw new Error "Plane unable to land"
  } else {
    if (this.hangar.length >= this.hangarCapacity) {
    throw new Error "No landing space available"
  }
    this.hangar.push(plane);
    return "Plane Landed"
  }
};
