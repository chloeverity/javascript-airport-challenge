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
})
