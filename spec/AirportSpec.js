describe('Airport', function() {

  var gatwick;
  var boeing;
  var goodWeather;
  var badWeather;

  beforeEach(function() {
    gatwick = new Airport();
    boeing = new Plane();
    goodWeather = new Weather();
    badWeather = new Weather();
  });
});

describe('Airport at capacity', function() {
  beforeEach(function() {
    spyOn(goodWeather, 'isStormy').and.returnValue(false)
  })
  it('should not allow plane to land', function() {
    for (var i = 0; i < 100; i++) {
      gatwick.land(`boeing${i}`, goodWeather)
    }
    expect(function() {gatwick.land(boeing, goodWeather)}).toThrowError('No landing space available');
  });
});

describe('Weather is good', function() {
  beforeEach(function() {
    spyOn(goodWeather, 'isStormy').and.returnValue(false)
  })
  describe('#land', function() {
    it('should allow plane to land', function() {
      expect(function() {gatwick.land(boeing, goodWeather)}).toEqual('Plane has landed');
    });
  });
  describe('#takeoff', function() {
    it('should allow plane to land', function() {
      expect(function() {gatwick.takeoff(boeing, goodWeather)}).toEqual('Plane has taken off');
    });
  });
})

describe('Weather is bad', function() {
  beforeEach(function() {
    spyOn(badWeather, 'isStormy').and.returnValue(true)
  })
  describe('#land', function() {
    it('should not allow plane to land', function() {
      expect(function() {gatwick.land(boeing, badWeather)}).toThrowError('Plane unable to land');
    });
  });
  describe('#takeoff', function() {
    it('should not allow plane to land', function() {
      expect(function() {gatwick.takeoff(boeing, badWeather)}).toThrowError('Plane unable to take off');
    });
  });
})