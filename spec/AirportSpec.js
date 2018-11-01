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
      expect(function() {gatwick.land(plane)}).toEqual('Plane has landed');
    });
  });
  describe('#takeoff', function() {
    it('should allow plane to land', function() {

      expect(function() {gatwick.takeoff(plane)}).toEqual('Plane has taken off');
    });
  });
});

describe('Weather is bad', function() {
  beforeEach(function() {
    spyOn(Math, 'random').and.returnValue(0.99)
  });
  describe('#land', function() {
    it('should not allow plane to land', function() {
      gatwick._weather.isStormy(true)
      expect(function() {gatwick.land(plane)}).toThrowError('Plane unable to land');
    });
  });
  describe('#takeoff', function() {
    it('should not allow plane to land', function() {
      expect(function() {gatwick.takeoff(plane)}).toThrowError('Plane unable to take off');
    });
  });
  });
});
