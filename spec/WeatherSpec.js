describe ('Weather', function() {
  var testweather

  beforeEach(function() {
    testweather = new Weather();
  });

  describe('generate good/bad weather', function() {
    it ('returns randomly good or bad', function() {
      expect([true, false]).toContain(testweather.isStormy())
    });
  })
  describe('isStormy', function() {
    it ('can return true', function() {
      spyOn(Math, 'random').and.returnValue(0.7)
      expect(testweather.isStormy()).toBeTruthy()
    })
    it('can return false', function() {
      spyOn(Math, 'random').and.returnValue(0.1)
      expect(testweather.isStormy()).toBeFalsy()
    })
  })
})
