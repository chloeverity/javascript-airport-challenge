describe('Airport', function() {

  var gatwick;
  var plane;
  var weather;

  beforeEach(function() {
    plane = 'BA123';
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    // spyOn(Math, 'random').and.returnValue(0.99);
    gatwick = new Airport(weather);
  });


  describe('#new airport', function() {
    it('should have an empty loading bay when initialized', function() {
      expect(gatwick.hangar).toEqual([]);
    });
  });

describe('Airport at capacity', function() {
  it('should not allow plane to land', function() {
    var hangarCapacity = 2;
    var miniAirport = new Airport(weather, hangarCapacity)
    miniAirport.land(plane);
    miniAirport.land(plane);
    expect(function() {miniAirport.land(plane);}).toThrow('No landing space available');
  });
});

describe('Weather is good', function() {
  // beforeEach(function() {
  //   spyOn(goodWeather, 'isStormy').and.returnValue(false)
  // });
  describe('#land', function() {
    it('should allow plane to land', function() {
      gatwick.land(plane)
      expect(gatwick.hangar).toContain('BA123');
    });
  });
  describe('#takeoff', function() {
    it('should allow plane to land', function() {
      gatwick.land(plane)
      gatwick.takeOff(plane)
      expect(gatwick.hangar).not.toContain('BA123');

    });
  });
});

describe('Weather is bad', function() {
  beforeEach(function() {
    stormyAirport = new Airport()
    // spyOn(Math, 'random').and.returnValue(0.99)
  });
  describe('#land', function() {
    it('should not allow plane to land', function() {
      spyOn(stormyAirport._weather, 'isStormy').and.returnValue(true);
      expect(function(){stormyAirport.land(plane);}).toThrow("Plane unable to land");
    });
  });
  describe('#takeoff', function() {
    it('should not allow plane to take off', function() {
      spyOn(stormyAirport._weather, 'isStormy').and.returnValue(true);
      expect(function(){stormyAirport.takeOff(plane);}).toThrow("Plane unable to take off");
    });
  });
  });
});
