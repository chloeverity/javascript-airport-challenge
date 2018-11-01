describe('Plane', function() {
  var plane;
  var gatwick

  beforeEach(function() {
    plane = new Plane()
    gatwick = jasmine.createSpyObj('gatwick', ['land', 'takeOff']);
  });

  describe('#status', function() {
    it('returns its default status', function() {
      expect(plane.status).toEqual('flying');
    });
  });

  describe('#land', function() {
    it('changes planes status to landed', function() {
      plane.land(gatwick);
      expect(plane.status).toEqual('landed');
    });

    it("plane cannot land if a plane is already landed", function(){
     plane.land(gatwick);
     expect(function(){plane.land(gatwick);}).toThrow("Plane already landed");
   });
 });

 describe('#takeOff', function() {

   beforeEach (function() {
     plane.land(gatwick);
     plane.takeOff(gatwick);
   })
   it('changes a planes status to flying', function() {
     expect(plane.status).toEqual('flying')
   })

   it("plane cannot take off if a plane is already flying", function(){
      expect(function(){plane.takeOff(gatwick);}).toThrow("Plane already taken off");
    });
 })
})
